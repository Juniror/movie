import { simpledate } from "../../data/movie_day.js"
import { getCurrentMovie } from "../../state/state.js"
import {setBookedSeats } from "../../state/stateDynamic.js"
import { getDB } from "../init.js"

export function loadBookedSeats() {
  if (!getDB() || !getCurrentMovie()) return

  const transaction = getDB().transaction(["bookings"], "readonly")
  const bookingsStore = transaction.objectStore("bookings")
  const movieIndex = bookingsStore.index("movieTitle")

  const movieQuery = movieIndex.getAll(getCurrentMovie().title)

  movieQuery.onsuccess = () => {
    const bookings = movieQuery.result

    // ===== หา date ที่เลือกอยู่ =====
    const selectedDateElement = document.querySelector(
      '.date-selector .item[style*="color: blue"]'
    )

    const selectedDateId = selectedDateElement
      ? selectedDateElement.getAttribute("data-date-id")
      : "date-content-1"

    const selectedDateObj = simpledate.find(
      (d) => d.page === selectedDateId
    )

    if (!selectedDateObj) {
      setBookedSeats([])
      return
    }

    // ===== รวม booked seats ทั้งหมดของวันนั้น =====
    const bookedSeats = []

    bookings.forEach((booking) => {
      if (booking.date === selectedDateObj.date) {
        bookedSeats.push(...booking.seats)
      }
    })

    // ===== set state ครั้งเดียว =====
    setBookedSeats(bookedSeats)
  }

  movieQuery.onerror = () => {
    console.error("Failed to load bookings")
    setBookedSeats([])
  }
}

