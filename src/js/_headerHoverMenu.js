

const header = document.querySelector(".header");
const headerMenu = header.querySelector(".header__menu");
const headerElArr = header.querySelectorAll(".header__el");
const headerInfo = header.querySelector(".header__info");
const headerInfoElArr = header.querySelectorAll(".header__info-el");

let activeEl = undefined;

headerElArr.forEach((element) => {

  element.addEventListener("mouseenter", (event) => {

    const target = headerInfoElArr[element.getAttribute("id")];
    activeEl = target;

    headerInfoElArr.forEach(element => {
      element.classList.remove("header__info-el_active");
    });

    headerMenu.style.setProperty("--infoElHeight", "0px");
    headerMenu.classList.remove('header-menu_active');
    headerInfo.classList.remove("header__info_active");
    activeEl.classList.remove('header__info-el_active');

    // Тебе не нужно искать элемент, тем более через forEach, он у тебя уже есть (element)

    target.classList.add("header__info-el_active");
    header.classList.add('header-active');
    headerMenu.classList.add('header-menu_active');
    headerMenu.style.setProperty("--infoElHeight", target.offsetHeight + "px");
    headerInfo.classList.add("header__info_active");

    header.classList.add('header-active');

  });

});

document.querySelector('body').addEventListener('mouseover', (e) => {
  e.preventDefault();
  if(e.target === header) {
    header.classList.remove('header-active');
  }
});

header.addEventListener('mouseleave', () => {

  headerMenu.style.setProperty("--infoElHeight", "0px");
  headerMenu.classList.remove('header-menu_active');
  headerInfo.classList.remove("header__info_active");
  activeEl.classList.remove('header__info-el_active');

});