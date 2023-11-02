import { isMobile, isTablet, isDesktop } from "./functions/check-viewport";
window.isMobile = isMobile;
window.isDesktop = isDesktop;
window.isTablet = isTablet;
import fsSlider from "../js/components/fullScreenSlider";

if (isMobile()) {
  document.querySelector(".product__slider").classList.add("swiper");
  document.querySelector(".product__content").classList.add("swiper-wrapper");

  new Swiper(".product__slider", {
    slidesPerView: 1,
    zoom: true,
    allowTouchMove: true,
    preloadImages: false,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  window.fsSlider = new fsSlider(document.querySelector(".fullscreen-slider"), {
    allowTouchMove: false,
    keyboard: {
      enabled: false,
    },
    thumbs: {
      swiper: null,
    },
    navigation: {
      nextEl: "",
      prevEl: "",
    },
    pagination: {
      el: ".fullscreen-slider .slider-pagination-navigation .swiper-pagination",
      clickable: true,
    },
  });

}

if (isTablet() || isDesktop()) {

  let swiper2 = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    allowSlideNext: false,
    allowSlidePrev: false,
  });

  window.fsSlider = new fsSlider(document.querySelector(".fullscreen-slider"), {
    keyboard: {
      enabled: true,
    },
    thumbs: {
      swiper: swiper2,
    },
    navigation: {
      nextEl:
        ".fullscreen-slider .slider-pagination-navigation .slider-navigation-next",
      prevEl:
        ".fullscreen-slider .slider-pagination-navigation .slider-navigation-prev",
    },
    pagination: {
      el: ".gallery-thumbs__content",
      clickable: true,
    },
  });

}


//mouseMove()
// let counter = 20;
// var whalf = window.innerHeight / 2;

// function mouseMove() {
//   document.onmousemove = function (event) {
//     if (event.pageY < whalf && counter <= 500) {
//       document.querySelector('.fullscreen-slider__slide.swiper-slide-active img').style = `transform: translate3d(${0}, ${counter + 'px'}, ${0});`
//       counter += 30;
//     } else if (event.pageY > whalf && counter >= -500) {
//       document.querySelector('.fullscreen-slider__slide.swiper-slide-active img').style = `transform: translate3d(${0}, ${counter + 'px'}, ${0});`
//       counter -= 30;
//     }
//   };
// } .product__slider.swiper