

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
  autoplay: {
    delay: 2000,
  },
  //createElements: true,
  // renderBullet: function (index, className) {
  //   return '<span class="' + className + '">' + (index + 1) + '</span>';
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

if(window.innerWidth >= 768) {
  document.querySelectorAll('.video-wrapper').forEach((el) => {
  if(el.querySelector('video')) {
    console.log('this is video')
    el.style.transform = "scaleY(2)"
    el.querySelectorAll(".video__el-name").forEach((item) => {
      item.style.transform = "scaleY(0.5)"
      //item.style.top = "calc(20px)"
    })
  }
  else  {
    console.log('this is image')
    el.querySelectorAll(".video__el-name").forEach((item) => {
      item.style.transform = "scaleY(1)"
    })
  }
})

document.querySelectorAll('.ordinary-slider__el.ordinary-slider__right').forEach((el) => {
  console.log(el)
  el.querySelector('.swiper-pagination').classList.add('ordinary-slider__right_active')
})

}