
import LazyLoad from "vanilla-lazyload";
import vanillaLazy from "vanilla-lazyload";

// let catalogImg = document.querySelectorAll('.catalog-img');
// let catalogEl = document.querySelectorAll('.catalog__link');

// let count = 0;

// catalogEl.forEach((el) => {
//   el.addEventListener('mouseover', (e) => {
//     count = e.target.getAttribute("attr");
//     newSrc = `../img/catalog-frame-${count}.png`;
//     catalogImg.forEach((item) => {
//       if(item.id === e.target.getAttribute("attr")) {
//         item.src = newSrc;
//       }
//     })
//   })
//   el.addEventListener('mouseleave', (e) => {
//     catalogImg.forEach((item) => {
//       if(item.id === e.target.getAttribute("attr")) {
//         item.src = `../img/catalog-bg-${e.target.getAttribute("attr")}.png`;
//       }
//     })
//   })
// })


var lazyLoadInstance = new LazyLoad({

});

lazyImgInit()

function lazyImgInit() {
  function setLazyBg() {
    document.querySelectorAll('[js-lazy][data-bg-src]:not([style*="background"])').forEach((el) => {
      if (el.dataset.bgSrc) {
        el.style.backgroundImage = `url(${el.dataset.bgSrc})`
      }
    })
  }
  setLazyBg()

  let imgContainersLazy = document.querySelectorAll('[js-lazy]:not(.swiper-slide) > img[data-src], [js-lazy]:not(.swiper-slide) > video[data-src]');
  window.globalLazy = new vanillaLazy(
    {
      unobserve_entered: true,
      class_loaded: 'is-loaded',
      callback_loaded: (el) => {
        el.parentElement.classList.add('is-loaded')
        setTimeout(() => el.parentElement.style.backgroundImage = '', 1500)
      }
    },
    imgContainersLazy
  );
}

window.globalLazyUpdate = function () {
  if (window.globalLazy.hasOwnProperty()) {
    window.globalLazy.destroy()
  }
  setLazyBg()
  let newContainers = document.querySelectorAll('[js-lazy]:not(.swiper-slide):not(is-loaded) > img[data-src], [js-lazy]:not(.swiper-slide):not(is-loaded) > video[data-src]');
  window.globalLazy = new vanillaLazy(
    {
      unobserve_entered: true,
      class_loaded: 'is-loaded',
      callback_loaded: (el) => {
        el.parentElement.classList.add('is-loaded')
        setTimeout(() => el.parentElement.style.backgroundImage = '', 1500)
      }
    },
    newContainers
  );
}