import { saveBooking } from "../database/command/saveBooking.js"
import { getSelectedSeats, getTotalPrice } from "../state/stateDynamic.js"
import { updateLanguage } from "../util/updateLanguage.js"

export function setupEventListeners() {
  // Language switchers
  const thaiLang = document.getElementById("thai-lang")
  const engLang = document.getElementById("eng-lang")

  if (thaiLang) {
    thaiLang.addEventListener("click", () => {
      thaiLang.classList.add("active")
      engLang.classList.remove("active")
      updateLanguage("thai")
    })
  }

  if (engLang) {
    engLang.addEventListener("click", () => {
      engLang.classList.add("active")
      thaiLang.classList.remove("active")
      updateLanguage("english")
    })
  }

  // Movie tab switchers
  const upcomingBtn = document.getElementById("upcomingBtn")
  const comingSoonBtn = document.getElementById("comingSoonBtn")

  if (upcomingBtn && comingSoonBtn) {
    upcomingBtn.addEventListener("click", () => {
      document.getElementById("upcomingGrid").classList.remove("hidden")
      document.getElementById("comingSoonGrid").classList.add("hidden")
      upcomingBtn.classList.add("active")
      comingSoonBtn.classList.remove("active")
    })

    comingSoonBtn.addEventListener("click", () => {
      document.getElementById("upcomingGrid").classList.add("hidden")
      document.getElementById("comingSoonGrid").classList.remove("hidden")
      upcomingBtn.classList.remove("active")
      comingSoonBtn.classList.add("active")
    })
  }

  // Page navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function () {
      const pageId = this.getAttribute("data-page")

      // Hide all pages
      document.querySelectorAll(".page-content").forEach((page) => {
        page.classList.remove("active")
      })

      // Show selected page
      document.getElementById(`${pageId}-page`).classList.add("active")

      // Update active nav item
      document.querySelectorAll(".nav-item").forEach((navItem) => {
        navItem.classList.remove("active")
      })
      this.classList.add("active")
    })
  })

  // Popup handling
  const openBtn = document.getElementById("openPopup")
  const closeBtn = document.getElementById("closePopup")
  const popup = document.getElementById("popup")

  if (openBtn && closeBtn && popup) {
    openBtn.addEventListener("click", () => {
      popup.style.display = "flex"
    })

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none"
    })

    // Close popup if user clicks outside content
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none"
      }
    })
  }

  // Seat booking event listeners
  const continueBtn = document.querySelector(".continue-btn")
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      if (getSelectedSeats().length > 0) {
        // Show payment overlay instead of confirm dialog
        const paymentOverlay = document.getElementById("payment-overlay")
        const selectedSeatsDisplay = document.getElementById("selected-seats-display")
        const totalPriceDisplay = document.getElementById("total-price-display")

        // Update payment details
        selectedSeatsDisplay.textContent = `Selected Seats: ${getSelectedSeats().map((seat) => seat.id).join(", ")}`
        totalPriceDisplay.textContent = `Total: ${getTotalPrice()} THB`

        // Show the overlay
        paymentOverlay.style.display = "flex"

        // Reset payment selection
        document.querySelectorAll(".payment-option").forEach((option) => {
          option.classList.remove("selected")
        })
        document.getElementById("confirm-payment").disabled = true
      } else {
        alert("Please select at least one seat to continue")
      }
    })
  }

  // Add event listeners for payment options
  document.querySelectorAll(".payment-option").forEach((option) => {
    option.addEventListener("click", function () {
      // Remove selected class from all options
      document.querySelectorAll(".payment-option").forEach((opt) => {
        opt.classList.remove("selected")
      })

      // Add selected class to clicked option
      this.classList.add("selected")

      // Enable confirm button
      document.getElementById("confirm-payment").disabled = false
    })
  })

  // Add event listener for confirm payment button
  document.getElementById("confirm-payment").addEventListener("click", () => {
    const selectedPayment = document.querySelector(".payment-option.selected")
    if (selectedPayment) {
      const paymentMethod = selectedPayment.getAttribute("data-payment")

      // Close the overlay
      document.getElementById("payment-overlay").style.display = "none"

      // Save the booking
      saveBooking()
    }
  })

  // Add event listeners for closing the payment overlay
  document.getElementById("close-payment").addEventListener("click", () => {
    document.getElementById("payment-overlay").style.display = "none"
  })

  document.getElementById("cancel-payment").addEventListener("click", () => {
    document.getElementById("payment-overlay").style.display = "none"
  })

  // Close overlay when clicking outside the modal
  document.getElementById("payment-overlay").addEventListener("click", function (e) {
    if (e.target === this) {
      this.style.display = "none"
    }
  })
  const discountBtn = document.querySelector(".discount-btn")
  if (discountBtn) {
    discountBtn.addEventListener("click", () => {
      alert("Discount options will be shown here")
    })
  }
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function () {
      const pageId = this.getAttribute("data-page")

      // Hide seat selection if it's visible
      const selectSeat = document.getElementById("select-seat")
      if (selectSeat && selectSeat.style.display === "block") {
        selectSeat.style.display = "none"

        // Show the time selection instead
        const selectTime = document.getElementById("select-time")
        if (selectTime) {
          selectTime.style.display = "block"
        }
      }

      // Hide all pages
      document.querySelectorAll(".page-content").forEach((page) => {
        page.classList.remove("active")
      })

      // Show selected page
      document.getElementById(`${pageId}-page`).classList.add("active")

      // Update active nav item
      document.querySelectorAll(".nav-item").forEach((navItem) => {
        navItem.classList.remove("active")
      })
      this.classList.add("active")
    })
  })
}