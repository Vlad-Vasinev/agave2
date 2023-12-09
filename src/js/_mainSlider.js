
console.log('768')
const ordinarySlider = new Swiper(".ordinary-slider", {
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

// if(isMobile()) {
//   console.log('here is mobile')
//   new Swiper(".small-slider", {
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: "true"
//     },
//     speed: 900,
//     direction: 'horizontal',
//   }) 
// }
console.log('768')
if(window.innerWidth <= 768) {
  console.log('768')
  ordinarySlider.destroy(true, true)
  //smallSlider.destroy(true, true)
}