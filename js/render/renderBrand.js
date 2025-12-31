import { type } from "../data/logo.js"

export function renderBrand(){
     const brand = document.getElementById("brand-items")
      if (brand) {
        for (let i = 0; i < type.brand.length; i++) {
          brand.innerHTML += `<img src="${type.brand[i].image}" alt=""></img>`
        }
      }
}