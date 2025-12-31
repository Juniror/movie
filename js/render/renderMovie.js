import { createFactory } from "../util/createFactory.js"
import { upcomingMovies, comingSoonMovies } from "../data/movie.js"

export function renderMovies(currentLanguage) {
  // Home
  const upcomingGrid = document.getElementById("upcomingGrid")
  const comingSoonGrid = document.getElementById("comingSoonGrid")

  // Movie Page
  const movieGrid = document.getElementById("movie-grid")

  if (upcomingGrid) {
    upcomingGrid.innerHTML = ""
    upcomingMovies[currentLanguage].forEach(movie => {
      upcomingGrid.innerHTML += createFactory("movie", movie)
    })
  }

  if (comingSoonGrid) {
    comingSoonGrid.innerHTML = ""
    comingSoonMovies[currentLanguage].forEach(movie => {
      comingSoonGrid.innerHTML += createFactory("movie", movie)
    })
  }

  if (movieGrid) {
    upcomingMovies["thai"].forEach((movie) => {
      movieGrid.innerHTML += createFactory("movie", movie)

    })
  }
}
