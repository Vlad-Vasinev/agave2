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

  // document.querySelectorAll('.product__el.swiper-slide').forEach((item) => {
  //   item.addEventListener('click', () => {

  //     console.log('click on product slider')

  //     document.querySelectorAll('.swiper-slide.fullscreen-slider__slide').forEach((el) => {
  //       if(el.getAttribute('data-swiper-slide-index') === item.getAttribute('data-swiper-slide-index')) {
  //         el.classList.add('swiper-slide-active');
  //       }
  //       else {
  //         el.classList.remove('swiper-slide-active');
  //       }
  //     })
  //   })
  // })

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
      el: "",
      clickable: false,
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