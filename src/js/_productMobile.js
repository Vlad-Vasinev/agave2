import { isMobile, isTablet, isDesktop } from "./functions/check-viewport";
window.isMobile = isMobile;
window.isDesktop = isDesktop;
window.isTablet = isTablet;
import fsSlider from "../js/components/fullScreenSlider";
import { disableScroll } from "./functions/disable-scroll";
import { enableScroll } from "./functions/enable-scroll";

if (isMobile()) {

  document.querySelectorAll('video').forEach((el) => {
    el.removeAttribute('controls')
  })
  
  document.querySelector(".product__slider").classList.add("swiper");
  document.querySelector(".product__content").classList.add("swiper-wrapper");

  new Swiper(".product__slider", {
    slidesPerView: 1,
    zoom: true,
    allowTouchMove: true,
    preloadImages: false,
    direction: "horizontal",
    // autoplay: {
    //   delay: 2000,
    // },
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

let priceBlock = document.querySelector('.product__price-block')
if( isMobile() && priceBlock) {
  document.querySelector('body').style.paddingBottom = "56px"
}

let productIconEl = document.querySelectorAll('.product__info-icon');

productIconEl.forEach(element => {
  if(element.getAttribute('src') === "") {
    element.style.display = "none"
    element.parentNode.style.paddingLeft = "0"
  }
});

let productEl = document.querySelectorAll('.product__el')

productEl.forEach(element => {
    if (element.querySelector('video')) {
      element.querySelector('picture').style.display = "none"
    }
});

let activePopup = document.querySelectorAll('.product__description-popup')
document.querySelectorAll('.product__description-more').forEach((el, index) => {
  el.addEventListener('click', () => {
    // if(isDesktop()) {
      disableScroll()
    // }
    document.querySelector('.product__description-bg').classList.add('bg-active')
    activePopup[index].classList.add('product__description_active')
  })
})

document.querySelectorAll('.product__description-close').forEach((el, index) => {
  el.addEventListener('click', () => {
    // if(isDesktop()) {
      enableScroll()
    // }
    document.querySelector('.product__description-bg').classList.remove('bg-active')
    activePopup[index].classList.remove('product__description_active')
  })
})