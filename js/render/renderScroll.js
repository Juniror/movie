import { createFactory } from "../util/createFactory.js"
import { system_therter } from "../data/logo.js"
export function createSystem_Therter(type) {
  const e = document.getElementById("st-display")
  if (e) {
    e.innerHTML = ""
    system_therter[type].forEach((element) => {
      e.innerHTML += createFactory("systemTherter", element)
    })
  }
}