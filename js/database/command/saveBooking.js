import { simpledate } from "../../data/movie_day.js"
import { updateSidebar } from "../../listener/updateSliderBar.js"
import { generateSeats } from "../../render/renderSeat.js"
import { getCurrentMovie, getIsLogin } from "../../state/state.js"
import { getSelectedSeats, getTotalPrice, getUsername, getUsersurname, setBookedSeats } from "../../state/stateDynamic.js"
import { getDB } from "../init.js"
import { loadBookingHistory } from "./loadBookingHistory.js"



export function saveBooking() {
  if (!getDB() || getSelectedSeats().length === 0 || !getCurrentMovie()) return

  // Check if user is logged in
  if (!getIsLogin()) {
    alert("Please log in to book seats.")
    document.getElementById("select-seat").style.display = "none"
    return
  }

  const transaction = getDB().transaction(["bookings"], "readwrite")
  const bookingsStore = transaction.objectStore("bookings")

  // Get the currently selected date
  const selectedDateElement = document.querySelector('.date-selector .item[style*="color: blue"]')
  const selectedDateId = selectedDateElement ? selectedDateElement.getAttribute("data-date-id") : "date-content-1"
  const selectedDateObj = simpledate.find((d) => d.page === selectedDateId)

  // Get the selected time and location
  const activeTimeContent = document.querySelector(".date-content.active")
  const selectedTimeElement = activeTimeContent ? activeTimeContent.querySelector(".loginbth2") : null
  const selectedLocationElement = activeTimeContent ? activeTimeContent.querySelector("h3") : null

  const selectedTime = selectedTimeElement ? selectedTimeElement.textContent : "11:00"
  const selectedLocation = selectedLocationElement ? selectedLocationElement.textContent : "SF Cinema"

  // Create booking record with enhanced movie details
  const booking = {
    userId: getUsername() + " " + getUsersurname(), // Use the user's name as userId
    movieTitle: getCurrentMovie().title,
    movieImage: getCurrentMovie().image,
    movieGenre: getCurrentMovie().genre,
    movieDuration: getCurrentMovie().duration,
    date: selectedDateObj ? selectedDateObj.date : simpledate[0].date,
    time: selectedTime,
    location: selectedLocation,
    seats: getSelectedSeats().map((seat) => seat.id),
    totalPrice: getTotalPrice(),
    timestamp: new Date().toISOString(),
  }

  const bookingRequest = bookingsStore.add(booking)

  bookingRequest.onsuccess = (event) => {
    const bookingId = event.target.result

    // Update UI
    alert(`Booking successful! Your booking ID is: ${bookingId}`)

    // Add booked seats to the bookedSeats array
    getSelectedSeats().forEach((seat) => {
      setBookedSeats([...getBookedSeats(), seat.id])
    })

    // Refresh seats and booking history
    generateSeats()
    loadBookingHistory()

    // Clear selection
    selectedSeats = []
    updateSidebar()

    // Change to select-time tab after booking is complete
    const selectTimeElement = document.getElementById("select-time")
    const selectSeatElement = document.getElementById("select-seat")

    if (selectTimeElement && selectSeatElement) {
      selectSeatElement.style.display = "none"
      selectTimeElement.style.display = "block"
    }
  }

  bookingRequest.onerror = (event) => {
    console.error("Error saving booking:", event.target.error)
    alert("There was an error processing your booking. Please try again.")
  }
}