
import { getIsLogin } from "../../state/state.js"
import {  getUsername, getUsersurname } from "../../state/stateDynamic.js"
import { getDB } from "../init.js"


export function loadBookingHistory() {
  if (!getDB() || !getIsLogin()) return

  const transaction = getDB().transaction(["bookings"], "readonly")
  const bookingsStore = transaction.objectStore("bookings")
  const userIndex = bookingsStore.index("userId")

  // Use the current user's name as the userId
  const userId = getUsername() + " " + getUsersurname()
  const userQuery = userIndex.getAll(userId)

  userQuery.onsuccess = () => {
    const bookings = userQuery.result
    const historyBookingElement = document.getElementById("history-booking")

    if (historyBookingElement) {
      if (bookings.length > 0) {
        // Clear existing history
        historyBookingElement.innerHTML = ""

        // Add each booking to the history
        bookings.forEach((booking) => {
          const bookingItem = document.createElement("div")
          bookingItem.className = "booking-item"

          // Enhanced booking history with movie image and more details
          bookingItem.innerHTML = `
            <div style="display: flex; gap: 15px; margin-bottom: 15px;">
              <div style="width: 80px; height: 120px; overflow: hidden;">
                <img src="${booking.movieImage}" alt="${booking.movieTitle}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div style="flex: 1;">
                <h3 style="color: #0066CC; margin-bottom: 10px;">${booking.movieTitle}</h3>
                <div style="color: #666; font-size: 14px; margin-bottom: 5px;">${booking.movieGenre}</div>
                <div style="color: #666; font-size: 14px; margin-bottom: 5px;">${booking.movieDuration} mins</div>
              </div>
            </div>
            <div class="booking-details">
              <span>Date:</span>
              <span>${booking.date}</span>
            </div>
            <div class="booking-details">
              <span>Time:</span>
              <span>${booking.time}</span>
            </div>
            <div class="booking-details">
              <span>Location:</span>
              <span>${booking.location}</span>
            </div>
            <div class="booking-details">
              <span>Seats:</span>
              <span>${booking.seats.join(", ")}</span>
            </div>
            <div class="booking-details" style="margin-top: 10px; font-weight: bold; color: #0066CC;">
              <span>Total:</span>
              <span>${booking.totalPrice} THB</span>
            </div>
          `

          historyBookingElement.appendChild(bookingItem)
        })
      } else {
        historyBookingElement.innerHTML =
          '<div style="text-align: center; padding: 20px; color: #666;">You don\'t have any bookings yet</div>'
      }
    }
  }

  userQuery.onerror = (event) => {
    console.error("Error loading booking history:", event.target.error)
  }
}


