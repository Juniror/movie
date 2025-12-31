
let currentMovie = null
let currentCinema = null
let currentTime = null
let currentDate = null
let islogin = false

export function setIsLogin(status) {
  islogin = status
}
export function getIsLogin() {
  return islogin
}
export function setCurrentMovie(movie) {
  currentMovie = movie
}

export function getCurrentMovie() {
  return currentMovie
}

export function setCurrentCinema(cinema) {
  currentCinema = cinema
}

export function getCurrentCinema() {
  return currentCinema
}

export function setCurrentTime(time) {
  currentTime = time
}

export function getCurrentTime() {
  return currentTime
}

export function setCurrentDate(date) {
  currentDate = date
}

export function getCurrentDate() {
  return currentDate
}

export function resetBookingState() {
  currentMovie = null
  currentCinema = null
  currentTime = null
  currentDate = null
}
