

const ordinarySlider = new Swiper(".ordinary-slider", {
  speed: 900,
  direction: 'vertical',
  effect: "creative",
  //grabCursor: true,
  mousewheel: {
    enabled: true,
    sensitivity: 4,
    releaseOnEdges: true,
  },
  // touchReleaseOnEdges: true,
  // toEdge: true,
  // edgeSwipeThreshold: 100,
  followFinger: true,
  freeMode: true,
  simulateTouch:	false,
  creativeEffect: {
    prev: {
      shadow: true,
          translate: [0, "-20%", -1],
      },
      next: {
          translate: [0, "100%", 0],
      },
  },

})  

// ordinarySlider.on('toEdge', (e) => {
//   console.log('last slide')
//   e.params.touchReleaseOnEdges = "true"
//   e.params.mousewheel = "{enabled: false}"
// })

const smallSlider = new Swiper(".small-slider", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true"
  },
  speed: 900,
  direction: 'horizontal',
})   

if(window.innerWidth <= 768) {
  ordinarySlider.destroy(true, true)
  document.querySelector('.special-wrapper').classList.add('swiper-container')
  document.querySelector('.special__list').classList.add('swiper-wrapper')
  document.querySelector('.special__list').querySelectorAll('.special__item').forEach((el) => {
    el.classList.add('swiper-slide')
  })
  const specialSlider = new Swiper(".special-wrapper", {
    loop: true,
    speed: 900,
    // autoplay: {
    //   delay: 2000,
    // },
    slidesPerGroup: 1,
    slidesPerView: 2,
    direction: 'horizontal',
  })  

}