//here is working code of custom swiper

// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// window.isMobile = isMobile;
// window.isMobile = isDesktop;

// if (isDesktop()) {
//   let bigImages = document.querySelectorAll('.product__el img');
// let productSlider = document.querySelector('.product__popup');
// let productSliderImg = document.querySelector('.product__popup .product__popup-img');
// let productSliderClose = document.querySelector('.product__popup-close');

// let galleriElement = document.querySelectorAll('.galleri__el');
// let galleriEl = document.querySelectorAll('.galleri__el img');
// let checkScroll = false;

// let productBtnPrew = document.querySelector('.product__popup-prew');
// let productBtnNext = document.querySelector('.product__popup-next');

// let activeIndex =  null;

// bigImages.forEach( (el, index) => {

//   el.addEventListener('click', () => {

//     checkScroll = true;
//     productSlider.classList.add('product__popup_active');
//     productSliderImg.src = el.getAttribute('data-src');

//     activeIndex = index;

//     galleriEl.forEach(element => {
//       element.style.border = "2px solid transparent";
//     });
//     if(index === activeIndex) {
//       galleriEl[index].style.border = "2px solid #006837";
//     }
//   })
//   galleriEl[index].setAttribute('src', el.getAttribute('data-src'))

// });

// galleriEl.forEach((element, index) => {

//   element.addEventListener('click', () => {

//     galleriEl.forEach(element => {
//       element.style.border = "2px solid transparent";
//     });
//     element.style.border = "2px solid #006837";

//     productSliderImg.setAttribute('src', element.getAttribute('src'))
//     activeIndex = parseInt(productSliderImg.getAttribute('src').match(/\d+/));
//   });
// })

// productSliderClose.addEventListener('click', () =>{
//   productSlider.classList.remove('product__popup_active');
// });

// let baseCoordinateY = null;
// let counter = 50;

// productBtnPrew.addEventListener('click', () => {
//   if(activeIndex < 1) { 

//     galleriEl.forEach(element => {
//       element.style.border = "2px solid transparent";
//     });

//     productSliderImg.setAttribute('src', `img/product-${galleriEl.length - 1}.png`);
//     activeIndex = (galleriEl.length - 1)
//     galleriEl[activeIndex].style.border = "2px solid #006837";
//   }
//   else {
//     galleriEl.forEach((el) => {
//       let someNumb = activeIndex;
//       el.style.border = "2px solid transparent";
//       if( el.getAttribute('src') === `img/product-${someNumb -= 1}.png` ) {
//         el.style.border = "2px solid #006837";
//       }
//     });

//     productSliderImg.setAttribute('src', `img/product-${activeIndex -= 1}.png`);
//   }

// });
// productBtnNext.addEventListener('click', () => {
//   if(activeIndex > (galleriEl.length - 2)) { 

//     galleriEl.forEach(element => {
//       element.style.border = "2px solid transparent";
//     });

//     productSliderImg.setAttribute('src', `img/product-${0}.png`);
//     activeIndex = 0
//     galleriEl[activeIndex].style.border = "2px solid #006837";
//   }
//   else {
//     galleriEl.forEach((el) => {
//       let someNumb = activeIndex;
//       el.style.border = "2px solid transparent";
//       if( el.getAttribute('src') === `img/product-${someNumb += 1}.png` ) {
//         el.style.border = "2px solid #006837";
//       }
//     });
//     productSliderImg.setAttribute('src', `img/product-${activeIndex += 1}.png`);
//   }

// });

// mouseMove()
// function mouseMove () {
//   window.addEventListener('mousemove', (event) => {

//     if(baseCoordinateY == null) {
//       baseCoordinateY = event.clientY 
//     }
//     if(baseCoordinateY != null) {
//       if(baseCoordinateY < event.clientY) { 
//         if(counter >= -400) {
//           productSliderImg.style = `transform: translateY(${counter + 'px'});`
//           counter -= 8; 
//         }
//       }
//       if(baseCoordinateY > event.clientY) {
//         if(counter <= 400) {
//           productSliderImg.style = `transform: translateY(${counter + 'px'});`
//           counter += 8;
//         }
//       }
//     }
//   });
// }

// document.addEventListener('keydown', (event) => {
//   if(event.code === 'Escape') {
//     productSliderImg.style = `transform: translateY(initial);`
//   }
// })
// }
// else if (isMobile()) {
  
// }

//here is working code of custom swiper