
import { setIsLogin } from "../../state/state.js"
import { getUsername, getUsersurname, setUsername, setUsersurname } from "../../state/stateDynamic.js"
import { getDB } from "../init.js"
import { loadBookingHistory } from "./loadBookingHistory.js"
export function checkUserEmailAndPassword() {
  if (!getDB()) {
    alert("Database not available. Please try again later.")
    return
  }

  const transaction = getDB().transaction(["users"], "readonly")
  const objectStore = transaction.objectStore("users")

  const email = document.getElementById("input-email").value
  const password = document.getElementById("input-password").value

  // Validate inputs
  if (!email || !password) {
    alert("Please enter both email and password")
    return
  }

  // Query the email index to check if the email exists
  const emailIndex = objectStore.index("email")
  const getEmailRequest = emailIndex.get(email)

  getEmailRequest.onsuccess = () => {

    if (getEmailRequest.result) {
      // Email exists, now check if the password matches
      if (getEmailRequest.result.password === password) {
        setIsLogin(true)
        document.getElementById("popup").style.display = "none"
        console.log("User authenticated successfully.")
        document.getElementById("openPopup").style.display = "none"
        document.getElementById("user").style.display = "flex"
        setUsername(getEmailRequest.result.name)
        setUsersurname(getEmailRequest.result.surname)
        document.getElementById("user").innerHTML = getUsername() + " " + getUsersurname()
        document.getElementById("name").innerHTML = "Hello, " + getUsername() + " " + getUsersurname()
        document.getElementById("input-email").value = ""
        document.getElementById("input-password").value = ""
        alert("Login successful!")

        // Load booking history after successful login
        loadBookingHistory()
      } else {
        console.log("Incorrect password.")
        alert("Incorrect password. Please try again.")
      }
    } else {
      console.log("Email does not exist.")
      alert("Email does not exist.")
    }
  }

  getEmailRequest.onerror = (event) => {
    console.error("Error retrieving user by email:", event.target.error)
    alert("Error checking credentials. Please try again.")
  }
}