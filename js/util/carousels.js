import { promotion } from "../data/logo.js"
import { hori_img } from "../data/movie.js"

export function initializeSlickCarousels() {
  // Title carousel
  $(".title-c").slick({
    infinite: true,
    speed: 800,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  })

  // Vertical carousel
  $(".vertical-carousel").slick({
    infinite: true,
    speed: 800,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    cssEase: "ease-in-out",
  })

  // Curo carousel
  $(".curo").slick({
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    dots: true,
  })

  // Seats carousel
  $(".seats").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  })

  // Inside blur carousel
  $(".insideblur").slick({
    infinite: true,
    speed: 800,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  })

  // Bowling slick carousel
  $(".bowlignslick").slick({
    infinite: true,
    speed: 800,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    cssEase: "linear",
  })

  // Date selector carousel
  let autoPlayedOnce = false // Flag to track autoplay

  $(".date-selector").slick({
    speed: 800,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    focusOnSelect: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 1500, // Let it pause briefly before first slide
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: false,
  })

  // Stop autoplay after first movement
  $(".date-selector").on("afterChange", function (event, slick, currentSlide) {
    if (!autoPlayedOnce) {
      autoPlayedOnce = true
      $(this).slick("slickPause")
    }
  })

  // Update blurred background when promotion slide changes
  $(".insideblur").on("afterChange", (event, slick, currentSlide) => {
    const newImage = promotion[currentSlide].image
    const blur_promo = document.getElementById("blur-promotion")
    if (blur_promo) {
      blur_promo.style.backgroundImage = `url("${newImage}")`
    }
  })

  // Update blurred background when title slide changes
  $(".title-c").on("afterChange", (event, slick, currentSlide) => {
    $(".blur-bg").css("background-image", `url(${hori_img[currentSlide]})`)
  })

  // Set initial background image
  $(".blur-bg").css("background-image", `url(${hori_img[0]})`)
}