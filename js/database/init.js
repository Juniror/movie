// Database initialization

import { loadBookedSeats } from "./command/loadBookedSeat.js";
import { loadBookingHistory } from "./command/loadBookingHistory.js";
import { upgradeDatabase } from "./command/updateDatabase.js";



let db = null
export function getDB(){
    return db;
}

export function initializeDatabase() {
  const request = indexedDB.open("myDatabase", 2)

  request.onerror = (event) => {
    console.error("Database error:", event.target.errorCode)
  }

  request.onsuccess = (event) => {
    db = event.target.result
    console.log("Database opened successfully")

    if (db.objectStoreNames.contains("bookings")) {
      loadBookedSeats()
      loadBookingHistory
    } else {
      upgradeDatabase()
    }
  }

  request.onupgradeneeded = (event) => {
    const db = event.target.result

    // Create users store if it doesn't exist
    if (!db.objectStoreNames.contains("users")) {
      const objectStore = db.createObjectStore("users", { keyPath: "id", autoIncrement: true })
      objectStore.createIndex("email", "email", { unique: true })
      objectStore.createIndex("name", "name", { unique: false })
      objectStore.createIndex("surname", "surname", { unique: false })
      objectStore.createIndex("password", "password", { unique: false })
    }

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

    console.log("Object stores and indexes created")
  }
}