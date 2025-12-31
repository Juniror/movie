import { simpledate } from "../data/movie_day.js"
import { loadBookedSeats } from "../database/command/loadBookedSeat.js"
import { setCurrentDate } from "./state.js"

// Tab and navigation functions
export function changeDate(tabName) {
  // Hide all tab contents
  var tabs = document.querySelectorAll(".date-content")
  tabs.forEach((tab) => {
    tab.classList.remove("active")
  })

  // Show the selected tab
  var activeTab = document.getElementById(tabName)
  if (activeTab) {
    activeTab.classList.add("active")
  }

  // Update date selector styling
  var dateItems = document.querySelectorAll(".date-selector .item")
  dateItems.forEach((item) => {
    if (item.getAttribute("data-date-id") === tabName) {
      item.style.color = "blue"

      // Store the selected date
      const dateId = item.getAttribute("data-date-id")
      setCurrentDate(simpledate.find((d) => d.page === dateId))
    } else {
      item.style.color = "grey"
    }
  })

  // Reload booked seats for the new date
  loadBookedSeats()
}

export function changeTab(tabName) {
  // Hide all tab contents
  var tabs = document.querySelectorAll(".tabcontent")
  tabs.forEach((tab) => {
    tab.classList.remove("active")
  })

  // Show the selected tab
  var activeTab = document.getElementById(tabName)
  if (activeTab) {
    activeTab.classList.add("active")
  }
}

export function changeTab2(tabName) {
  // Hide all tab contents
  var tabs = document.querySelectorAll(".content")
  tabs.forEach((tab) => {
    tab.classList.remove("active")
  })

  // Show the selected tab
  var activeTab = document.getElementById(tabName)
  if (activeTab) {
    activeTab.classList.add("active")
  }
}

export function changeTab3(tabName) {
  // Hide all tab contents
  var tabs = document.querySelectorAll(".profile-tab")
  tabs.forEach((tab) => {
    tab.classList.remove("active")
  })

  // Show the selected tab
  var activeTab = document.getElementById(tabName)
  if (activeTab) {
    activeTab.classList.add("active")
  }
}