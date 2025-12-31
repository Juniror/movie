import { type } from "../data/logo.js"
import { createFactory } from "../util/createFactory.js"

export function renderSpicial_promo() {

  // single
  const all = document.getElementById("all-item")
  // all 
  const tabIds = ["movie-item", "sf-item", "food-item", "bank-item", "branch-item", "other-item"]

  if (all) {
    type.all.forEach((item) => {
      all.innerHTML += createFactory("promotion", item)
    })
  }


 
  tabIds.forEach((tabId) => {
    const tabElement = document.getElementById(tabId)
    if (!tabElement) return

    tabElement.innerHTML = ""

    const itemCount = Math.floor(Math.random() * 8) + 5 
    const shuffledItems = [...type.all]

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = shuffledItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]]
    }

    // Take the first 'itemCount' items and add them to the tab
    shuffledItems.slice(0, itemCount).forEach((item) => {
      tabElement.innerHTML += createFactory("promotion", item)
    })
  })
}