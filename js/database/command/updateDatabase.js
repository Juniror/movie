
import { getDB } from "../init.js"
import { loadBookedSeats } from "./loadBookedSeat.js"
import { loadBookingHistory } from "./loadBookingHistory.js"

export function upgradeDatabase() {
  const version = getDB().version + 1
  getDB().close()
  const upgradeRequest = indexedDB.open("myDatabase", version)

  upgradeRequest.onupgradeneeded = (event) => {
    const db = event.target.result

    // Create bookings store if it doesn't exist
    if (!db.objectStoreNames.contains("bookings")) {
      const bookingsStore = db.createObjectStore("bookings", { keyPath: "id", autoIncrement: true })
      bookingsStore.createIndex("userId", "userId", { unique: false })
      bookingsStore.createIndex("movieTitle", "movieTitle", { unique: false })
      bookingsStore.createIndex("date", "date", { unique: false })
      bookingsStore.createIndex("seats", "seats", { unique: false, multiEntry: true })
      bookingsStore.createIndex("movieImage", "movieImage", { unique: false }) // Add image for display
      bookingsStore.createIndex("movieGenre", "movieGenre", { unique: false }) // Add genre for display
      bookingsStore.createIndex("movieDuration", "movieDuration", { unique: false }) // Add duration for display
    }
  }

  upgradeRequest.onsuccess = (event) => {
    db = event.target.result
    console.log("Database upgraded successfully")
    loadBookedSeats()
    loadBookingHistory()
  }
}
