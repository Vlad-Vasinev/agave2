
import { disableScroll } from "./functions/disable-scroll";
import { enableScroll } from "./functions/enable-scroll";

import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
window.isMobile = isMobile

let burger = document.querySelector(".burger.header-mobile__open");
let mobileMenu = document.querySelector(".mobile-menu");
let closeMobile = document.querySelector(".mobile-menu__button.close-btn");

burger.addEventListener("click", () => {
  mobileMenu.classList.add("mobile-menu_active");
  disableScroll();
});
closeMobile.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu_active");
  enableScroll();
});

const headerInner = document.querySelector('.header-mobile__inner'); 
const logo = document.querySelector('.logo');
if(isMobile()) {

  let headerMobile = document.querySelector('.header-mobile');
  const observer = new IntersectionObserver(
    ([e]) => {
      headerInner.classList.toggle("header-mobile_active", e.isIntersecting < 1)
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: [1]
    }
  );
  observer.observe(headerMobile);

}
else if(!isMobile()) {

}