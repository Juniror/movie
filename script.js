import { renderMovies } from './js/render/renderMovie.js';
import { renderDate } from './js/render/renderDate.js';
import { createSystem_Therter } from './js/render/renderScroll.js';
import { initializeDatabase } from './js/database/init.js';
import { checkUserEmailAndPassword } from './js/database/command/checkUserEmailAndPassword.js';
import { renderNews } from './js/render/renderNews.js';
import { renderBlur_bg } from './js/render/renderBlur_bg.js';
import { renderSpicial_promo } from './js/render/renderSpicial_promo.js';
import { generateSeats } from './js/render/renderSeat.js';
import { initializeSlickCarousels } from './js/util/carousels.js';
import { getCurrentLanguage } from './js/state/stateDynamic.js';
import { setupEventListeners } from './js/listener/setupListender.js';
import { renderBrand } from './js/render/renderBrand.js';
import { changeDate, changeTab, changeTab2, changeTab3 } from './js/state/change.js';
import { updateLanguage } from './js/util/updateLanguage.js';
import { addName, getTicket, goProfile, goSeat, lockout } from './js/util/navigator.js';
import { addUser } from './js/database/command/addUser.js';


// Initialize page elements
document.addEventListener("DOMContentLoaded", () => {
  renderMovies(getCurrentLanguage())

  
  renderDate()

  createSystem_Therter("system")

  renderNews()
  
  changeDate("date-content-1")
  changeTab("brand")
  changeTab2("allc")
  changeTab3("booking")

  renderBlur_bg()

  renderBrand()





  updateLanguage("thai")

  initializeDatabase()

  setupEventListeners()

 
  initializeSlickCarousels()

  changeDate("date-content-1")
  changeTab("brand")
  changeTab2("allc")
  changeTab3("booking")

  


  renderSpicial_promo()


  generateSeats()
})













// Make functions available globally
window.getTicket = getTicket
window.goSeat = goSeat
window.goProfile = goProfile
window.lockout = lockout
window.addName = addName
window.addUser = addUser
window.checkUserEmailAndPassword = checkUserEmailAndPassword
window.changeDate = changeDate
window.changeTab = changeTab
window.changeTab2 = changeTab2
window.changeTab3 = changeTab3
window.createSystem_Therter = createSystem_Therter
