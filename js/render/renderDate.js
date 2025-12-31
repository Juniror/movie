import { createFactory } from "../util/createFactory.js"
import { simpledate } from "../data/movie_day.js"

export function renderDate() {
     const dateSelector = document.getElementById("date-selector")
      if (dateSelector) {
        simpledate.forEach((item) => {
          dateSelector.innerHTML += createFactory("date",item)
        })
      }

}