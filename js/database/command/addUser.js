
import { getDB } from "../init.js"

// User authentication functions
export function addUser() {
  if (!getDB()) {
    alert("Database not available. Please try again later.")
    return
  }

  // Start a transaction with read/write access to the 'users' object store
  const transaction = getDB().transaction(["users"], "readwrite")
  const objectStore = transaction.objectStore("users")

  // Get input values from the user form
  const email = document.getElementById("input-email").value
  const password = document.getElementById("input-password").value
  const name = document.getElementById("input-name").value
  const surname = document.getElementById("input-surname").value

  // Validate inputs
  if (!email || !password || !name || !surname) {
    alert("Please fill in all fields")
    return
  }

  // Create a user object to store in the database
  const user = {
    email: email,
    password: password,
    name: name,
    surname: surname,
  }

  // Add the user to the object store
  const request = objectStore.add(user)

  // Handle success
  request.onsuccess = () => {
    console.log("User added successfully:", user)
    alert("User added successfully!")

    // Reset form and UI
    document.getElementById("input-email").value = ""
    document.getElementById("input-password").value = ""
    document.getElementById("input-name").value = ""
    document.getElementById("input-surname").value = ""

    // Switch back to login view
    addName()
  }

  // Handle error
  request.onerror = (event) => {
    console.error("Error adding user:", event.target.error)
    alert("Error adding user. Email may already be registered.")
  }
}

