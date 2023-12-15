
import { disableScroll } from "./functions/disable-scroll";
import { enableScroll } from "./functions/enable-scroll";

import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
window.isMobile = isMobile

let mobileMenu = document.querySelector(".mobile-menu");

document.querySelectorAll('.mobile-email.header-mobile__email').forEach((el) => {
  el.addEventListener('click', () => {

    if(!el.getAttribute('clicked')) {
      el.setAttribute('clicked', "clicked")
      mobileMenu.classList.add("mobile-menu_active");
      headerInner.classList.add('header-mobile_active')
      document.querySelector('.mobile-email').innerHTML = '<button class="mobile-menu__button close-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.63599 18.364L18.3639 5.63603M5.63599 5.63604L18.3639 18.364" stroke="black" stroke-width="1.5" stroke-linecap="round"/></svg></button>'
      disableScroll();
    }
    else {
      headerInner.classList.remove('header-mobile_active')
      el.removeAttribute('clicked')
      mobileMenu.classList.remove("mobile-menu_active");
      enableScroll();
      document.querySelector('.mobile-email').innerHTML = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14H26" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M2 5H26" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M2 23H26" stroke="black" stroke-width="1.5" stroke-linecap="round"/></svg>'
    }

  })
})

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