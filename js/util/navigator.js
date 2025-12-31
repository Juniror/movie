import { loadBookedSeats } from "../database/command/loadBookedSeat.js"
import { generateSeats } from "../render/renderSeat.js"
import { getCurrentCinema, getCurrentTime, getIsLogin, setCurrentCinema, setCurrentMovie, setCurrentTime, setIsLogin } from "../state/state.js"
import { getNxame, setNxame, setUsername, setUsersurname } from "../state/stateDynamic.js"

export function goSeat() {
  // Check if user is logged in
  if (!getIsLogin()) {
    alert("Please log in to select seats.")
    document.getElementById("popup").style.display = "flex"
    return
  }

  const time = document.getElementById("select-time")
  const seat = document.getElementById("select-seat")
  if (time && seat) {
    time.style.display = "none"
    seat.style.display = "block"
  }

  // Store the selected time and cinema
  const activeTimeContent = document.querySelector(".date-content.active")
  const selectedTimeElement = activeTimeContent ? activeTimeContent.querySelector(".loginbth2") : null
  const selectedLocationElement = activeTimeContent ? activeTimeContent.querySelector("h3") : null

  if (selectedTimeElement) {
    setCurrentTime(selectedTimeElement.textContent)
  }

  if (selectedLocationElement) {
    setCurrentCinema(selectedLocationElement.textContent)
  }

  // Update event info in seat selection sidebar
  const eventTimeElement = document.getElementById("eventTime")
  const cinemaLocationElement = document.getElementById("cinemaLocation")

  if (eventTimeElement && getCurrentTime()) {
    eventTimeElement.textContent = getCurrentTime()
  }

  if (cinemaLocationElement && getCurrentCinema()) {
    cinemaLocationElement.textContent = getCurrentCinema()
  }

  // Generate seats when moving to seat selection
  generateSeats()
}

export function getTicket(element) {
  const movieString = element.getAttribute("data-movie")
  const movie = JSON.parse(decodeURIComponent(movieString))

  // Store the selected movie globally
  setCurrentMovie(movie)

  // Hide all pages
  document.querySelectorAll(".page-content").forEach((page) => {
    page.classList.remove("active")
  })

  // Show ticket page
  const ticketPage = document.getElementById("ticket-page")
  if (ticketPage) {
    ticketPage.classList.add("active")

    // Update movie details
    const whatMovie = document.getElementById("whatmovie")
    const movieName = document.getElementById("moviename")
    const movieGenre = document.getElementById("moviegenre")
    const movieDuration = document.getElementById("movieduration")

    if (whatMovie) whatMovie.style.backgroundImage = `url(${movie.image})`
    if (movieName) movieName.innerHTML = movie.title
    if (movieGenre) movieGenre.innerHTML = movie.genre
    if (movieDuration) movieDuration.innerHTML = movie.duration + " Mins"

    // Update event info in seat selection sidebar
    const movieTitle = document.getElementById("movieTitle")
    if (movieTitle) movieTitle.textContent = movie.title

    // Show time selection by default
    const selectTime = document.getElementById("select-time")
    const selectSeat = document.getElementById("select-seat")

    if (selectTime) selectTime.style.display = "block"
    if (selectSeat) selectSeat.style.display = "none"

    // Load booked seats for this movie
    loadBookedSeats()
  }
}

export function goProfile() {
  console.log(getIsLogin());
   if (!getIsLogin()) {
    alert("Please login first")
    return
  }
  // Hide all pages
  document.querySelectorAll(".page-content").forEach((page) => {
    page.classList.remove("active")
  })

  // Show profile page
  const profilePage = document.getElementById("profile-page")
  if (profilePage) {
    profilePage.classList.add("active")
  }
}

export function lockout() {
  const userElement = document.getElementById("user")
  const openPopupElement = document.getElementById("openPopup")

  if (userElement && openPopupElement) {
    userElement.style.display = "none"
    openPopupElement.style.display = "flex"
  }

  setIsLogin(false)
  setUsername(null)
  setUsersurname(null)

  // Go back to home page
  document.querySelectorAll(".page-content").forEach((page) => {
    page.classList.remove("active")
  })

  document.getElementById("home-page").classList.add("active")
}

export function addName() {
  const login = document.getElementById("lg")
  const forget = document.getElementById("forget")

  if (!login || !forget) return

  if (getNxame()) {
    login.style.display = "flex"
    forget.style.display = "block"

    const n = document.getElementById("input-name1")
    const s = document.getElementById("input-surname1")
    const s1 = document.getElementById("s1")
    const s2 = document.getElementById("s2")
    const sign = document.getElementById("sigh")

    if (n) n.remove()
    if (s) s.remove()
    if (s1) s1.remove()
    if (s2) s2.remove()
    if (sign) sign.remove()

    setNxame(false) 
  } else {
    forget.style.display = "none"
    login.style.display = "none"

    const input = document.getElementById("input")
    if (input) {
      input.innerHTML += `
                <div id="s1" class="sizebox" style="height: 20px;"></div>
                <div id="input-name1" class="input">
                    <div class="r">
                        <input id="input-name" type="text" placeholder="Name">
                    </div>
                    <div class="l">
                        <i class="fa-regular fa-user" style="color: rgba(0, 0, 0, 0.15); font-size: 24px;"></i>
                    </div>
                </div>
                <div id="s2" class="sizebox" style="height: 20px;"></div>
                <div id="input-surname1" class="input">
                    <div class="r">
                        <input id="input-surname" type="text" placeholder="Surname">
                    </div>
                    <div class="l">
                        <i class="fa-regular fa-user" style="color: rgba(0, 0, 0, 0.15); font-size: 24px;"></i>
                    </div>
                </div>
                <div id="sigh" class="loginbth" onclick="addUser()">Sign in</div>
            `
    }

    setNxame(true)
  }
}