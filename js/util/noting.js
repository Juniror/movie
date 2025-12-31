
export function hideSelectSeatOnPageChange() {
  // Get all navigation items
  const navItems = document.querySelectorAll(".nav-item")

  // Add event listener to each navigation item
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Check if the seat selection is currently visible
      const selectSeat = document.getElementById("select-seat")
      if (selectSeat && selectSeat.style.display === "block") {
        // Hide the seat selection
        selectSeat.style.display = "none"

        // Show the time selection instead
        const selectTime = document.getElementById("select-time")
        if (selectTime) {
          selectTime.style.display = "block"
        }
      }
    })
  })
}