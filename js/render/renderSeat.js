import { rows } from "../data/rows_seat.js"
import { getBookedSeats, getSelectedSeats, setSelectedSeats } from "../state/stateDynamic.js"
import { updateSidebar } from "../listener/updateSliderBar.js"

// Function to generate seats
export function generateSeats() {
  const seatsContainer = document.getElementById("seatsContainer")
  if (!seatsContainer) return

  // Clear existing seats
  seatsContainer.innerHTML = ""

  rows.forEach((row) => {
    for (let i = 0; i < row.seats; i++) {
      const seatNumber = i + 1 // Start from 1 instead of 0
      const seatId = `${row.id}${seatNumber}`
      const seat = document.createElement("div")
      seat.classList.add("seat")

      // Create the seat icon
      const icon = document.createElement("i")

      // Check if seat is already booked
      if (getBookedSeats().includes(seatId)) {
        seat.classList.add("booked")
        icon.classList.add("fa-solid", "fa-xmark") // Use X mark for booked seats
      } else {
        icon.classList.add("fa-solid", "fa-couch") // Use couch for available seats
      }

      seat.appendChild(icon)

      // Add seat ID display
      const seatIdElement = document.createElement("div")
      seatIdElement.classList.add("seat-id")
      seatIdElement.textContent = seatId
      seat.appendChild(seatIdElement)

      // Set seat type based on row configuration
      seat.classList.add(row.type)
      seat.dataset.price = row.price
      seat.dataset.id = seatId

      // Add click event for available seats
      if (!getBookedSeats().includes(seatId)) {
        seat.addEventListener("click", function () {
          const seatId = this.dataset.id
          const seatPrice = Number.parseInt(this.dataset.price)
          const icon = this.querySelector("i")

          // Check if seat is already selected
          const seatIndex = getSelectedSeats().findIndex((s) => s.id === seatId)

          if (seatIndex === -1) {
            // Seat not selected, add it
            this.classList.add("selected")

            // Change icon to check mark
            icon.classList.remove("fa-couch")
            icon.classList.add("fa-check")

            setSelectedSeats([
              ...getSelectedSeats(),
              {
                id: seatId,
                price: seatPrice,
              }
            ])
          } else {
            // Seat already selected, remove it
            this.classList.remove("selected")

            // Change icon back to couch
            icon.classList.remove("fa-check")
            icon.classList.add("fa-couch")

            selectedSeats.splice(seatIndex, 1)
          }

          // Update sidebar info
          updateSidebar()
        })
      }

      seatsContainer.appendChild(seat)
    }
  })
}