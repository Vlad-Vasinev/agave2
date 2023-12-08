

new Swiper(".ordinary-slider", {
  speed: 900,
  direction: 'vertical',
  effect: "creative",
  grabCursor: true,
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

new Swiper(".small-slider", {
  loop: true,
  // autoplay: {
  //   delay: 2000,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  speed: 900,
  direction: 'horizontal',
})   