import { isMobile, isTablet, isDesktop } from "./functions/check-viewport";
window.isMobile = isMobile;
window.isDesktop = isDesktop;
window.isTablet = isTablet;
import fsSlider from "../js/components/fullScreenSlider";
import { disableScroll } from "./functions/disable-scroll";
import { enableScroll } from "./functions/enable-scroll";
// import { DllReferencePlugin } from "webpack";

if (isMobile()) {

  document.querySelectorAll('video').forEach((el) => {
    el.removeAttribute('controls')
  })
  if(document.querySelector(".product__slider")) {
    document.querySelector(".product__slider").classList.add("swiper");
    document.querySelector(".product__content").classList.add("swiper-wrapper");

    document.querySelector(".product__content").querySelectorAll('video').forEach((el) => {
      el.removeAttribute('controls')
    })  

  }
  // document.querySelector(".product__slider").classList.add("swiper");
  // document.querySelector(".product__content").classList.add("swiper-wrapper");

  // document.querySelector(".product__content").querySelectorAll('video').forEach((el) => {
  //   el.removeAttribute('controls')
  // })  

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
    // breakpoints: {
    //   320: {
    //     autoplay: {
    //       delay: false
    //     }
    //   },
    //   768: {
    //     autoplay: {
    //       delay: 2000
    //     }
    //   }
    // },
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

let productText = document.querySelector('.product__block .product__description p')
let productTextPopup = document.querySelector('.product .product__description-popup.popup-text .product__description-text')
let productProp = document.querySelector('.product__block .product__properties')
let productPropPopup = document.querySelector('.product .product__description-popup.popup-properties .product__properties')

let propertiesList = document.querySelectorAll('.product__block .product__properties-list')
let propertiesTitle = document.querySelectorAll('.product__block .product__properties .product__properties-title')

if(productText) {
  if(productText.innerHTML.length > 233) {

  document.querySelectorAll('.product__block .product__description p').forEach((el, index) => {
    let newP = el.cloneNode(true)
    let newTitle = el.parentElement.querySelectorAll('h2')[index].cloneNode(true)
    productTextPopup.appendChild(newTitle)
    productTextPopup.appendChild(newP)
  })

  let newString = productText.innerHTML.slice(0, 215)
  productText.innerHTML = `${newString}...`
  }
}

if(document.querySelectorAll('.product__block .product__description p').length > 1) {
  document.querySelectorAll('.product__block .product__description p').forEach((el, index) => {
    el.style.display = "none"
    document.querySelectorAll('.product__block .product__description h2')[index].style.display = "none"
  })
  document.querySelectorAll('.product__block .product__description p')[0].style.display = "block"
  document.querySelectorAll('.product__block .product__description h2')[0].style.display = "block"
}

let newProps = null
if(propertiesList.length > 1) {

  document.querySelectorAll('.product__block .product__description__title').forEach((el) => {
    el.style.display = "none"
  }) 
  document.querySelectorAll('.product__block .product__description-info').forEach((el) => {
    el.style.display = "none"
  }) 

  newProps = productProp.innerHTML
  propertiesList.forEach((el, index) => {
    el.style.display = "none"
  })
  propertiesTitle.forEach((el) => {
    el.style.display = "none"
  })
  propertiesList[0].style.display = 'block'
  propertiesTitle[0].style.display = 'block'
}

let activePopup = document.querySelectorAll('.product__description-popup')
document.querySelectorAll('.product__description-more').forEach((el, index) => {
  el.addEventListener('click', () => {
    disableScroll()
    document.querySelector('.product__description-bg').classList.add('bg-active')
    activePopup[index].classList.add('product__description_active')

    productPropPopup.innerHTML = newProps
    document.querySelectorAll('.product__description-popup.popup-properties .product__description__title').forEach((el) => {
      el.style.display = "block"
    })
    document.querySelectorAll('.product__description-popup.popup-properties .product__description-info').forEach((el) => {
      el.style.display = "block"
    }) 
    productPropPopup.querySelector('button').style.display = "none"
  })
})

document.querySelectorAll('.product__description-close').forEach((el, index) => {
  el.addEventListener('click', () => {
    enableScroll()
    document.querySelector('.product__description-bg').classList.remove('bg-active')
    activePopup[index].classList.remove('product__description_active')
  })
})



console.log('products')