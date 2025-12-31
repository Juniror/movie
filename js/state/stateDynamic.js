let bookedSeats = []
let currentLanguage = "thai"
let username
let usersurname
let selectedSeats = []
let totalPrice = 0
let nxame = false
export function setUsername(name) {
  username = name
}   
export function getUsername() {
  return username
}
export function setUsersurname(surname) {
  usersurname = surname
}
export function getUsersurname() {
  return usersurname
}
export function setSelectedSeats(seats) {
  selectedSeats = seats
}   
export function getSelectedSeats() {    
    return selectedSeats
}
export function setTotalPrice(price) {
    totalPrice = price
}
export function getTotalPrice() {
    return totalPrice
}
export function setNxame(value) {
  nxame = value
}   
export function getNxame() {
  return nxame
}   
export function setCurrentLanguage(lang) {
  currentLanguage = lang
}   
export function getCurrentLanguage() {
  return currentLanguage
}

export function setBookedSeats(seats) {
  bookedSeats = seats
}     
export function getBookedSeats() {
  return bookedSeats
}

