import { getSelectedSeats, getTotalPrice, setTotalPrice } from "../state/stateDynamic.js"

export function updateSidebar() {
  const selectedSeatElement = document.querySelector(".seat-value")
  const priceValueElement = document.querySelector(".price-value")

  if (selectedSeatElement && priceValueElement) {
    if (getSelectedSeats().length === 0) {
      selectedSeatElement.textContent = "-"
      priceValueElement.textContent = "0 THB"
      totalPrice = 0
    } else {
      // Update selected seats display
      selectedSeatElement.textContent = getSelectedSeats().map((seat) => seat.id).join(", ")

      // Calculate total price
      setTotalPrice(getSelectedSeats().reduce((sum, seat) => sum + seat.price, 0))
      priceValueElement.textContent = `${getTotalPrice ()} THB`
    }
  }
}