import { translations } from "../data/translate.js"
import { updateMovieGrids } from "../render/renderMovieGrid.js"
import { setCurrentLanguage } from "../state/stateDynamic.js"

export function updateLanguage(lang) {
  setCurrentLanguage(lang)

  // Update all text elements with language class
  for (const [key, value] of Object.entries(translations[lang])) {
    document.querySelectorAll(`.${key}`).forEach((el) => {
      el.textContent = value
    })
  }

  // Update movie grids
  updateMovieGrids()
}