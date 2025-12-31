import { comingSoonMovies, upcomingMovies } from "../data/movie.js"
import { getCurrentLanguage } from "../state/stateDynamic.js"
import { createFactory } from "../util/createFactory.js"

export function updateMovieGrids() {
  const upcomingGrid = document.getElementById("upcomingGrid")
  const comingSoonGrid = document.getElementById("comingSoonGrid")

  if (upcomingGrid && comingSoonGrid) {
    // Clear grids
    upcomingGrid.innerHTML = ""
    comingSoonGrid.innerHTML = ""

    // Populate with current language
    upcomingMovies[getCurrentLanguage()].forEach((movie) => {
      upcomingGrid.innerHTML += createFactory("movie",movie)
    })

    comingSoonMovies[getCurrentLanguage()].forEach((movie) => {
      comingSoonGrid.innerHTML += createFactory("movie",movie)
    })
  }
}
