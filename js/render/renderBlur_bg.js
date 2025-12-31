import { promotion } from "../data/logo.js"

export function renderBlur_bg(){
const blur_promo = document.getElementById("blur-promotion")
  if (blur_promo) {
    blur_promo.style.backgroundImage = `url("${promotion[0].image}")`
  }
}