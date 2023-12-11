

const ordinarySlider = new Swiper(".ordinary-slider", {
  speed: 900,
  direction: 'vertical',
  effect: "creative",
  //grabCursor: true,
  mousewheel: {
    enabled: true,
    sensitivity: 4,
  },
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

const smallSlider = new Swiper(".small-slider", {
  loop: true,
  // autoplay: {
  //   delay: 2000,
  // },
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
  //smallSlider.destroy(true, true)
}