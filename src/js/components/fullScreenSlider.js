import vanillaLazy from "vanilla-lazyload";
import getChildIndex from "../functions/getChildIndex";
import { disableScroll } from ".././functions/disable-scroll";
import { enableScroll } from ".././functions/enable-scroll";
import { isDesktop } from "../functions/check-viewport";

export default class fsSlider {

  constructor(sliderEl, options) {
    //.swiper-wrapper.two-side-slider__wrapper(data-fs-ctr)
    //.swiper-slide.two-side-slider__slide(js-lazy data-bg-src='/img/lazyBg.webp' data-fs-full='img/largeProjImg1.png')

    this.fsEl = sliderEl;
    this.fsSliderEl = this.fsEl.querySelector(".swiper-container");
    this.fsWrpEl = this.fsEl.querySelector(".swiper-wrapper");
    this.sldTpl = this.fsEl.querySelector("#slide-tpl");
    this.sldSel = "." + this.sldTpl.content.firstElementChild.classList[0];
    this.fsClose = this.fsEl.querySelector("[fs-close]");
    this.slides = [];
    this.currCtr = undefined;
    this.lastCtr = undefined;
    this.init();
    // document.querySelectorAll('[data-fs-full]')[2].click()

    //Vlad's substance
    this.option = options;
    //Vlad's substance
  }

  showOptions() {
    // console.log(this.option);
  }

  init() {
     document.querySelectorAll("[data-fs-ctr]:not(._fs-inited)").forEach((fsCtr) => {
        const sldArr = fsCtr.querySelectorAll("[data-fs-full]");
        sldArr.forEach((el, index) => {
          let srcArr = Array.from(sldArr).map((el) => el.dataset.fsFull);
          if (fsCtr.dataset.fsSrcset) {
            srcArr = srcArr.concat(fsCtr.dataset.fsSrcset.split(","));
          }

          el.addEventListener("click", (e) => {
            this.openSlider(e, srcArr, fsCtr, index);
          });
        });
        fsCtr.classList.add("_fs-inited");
      });

  }
  openSlider(event = undefined, srcArr = undefined, fsCtr = null, initialIndex = 0) {
    console.log("open slider func");
    if (!this.lastCtr) {
      this.lastCtr = fsCtr;
      this.slides = this.mountSlides(srcArr);
    } else if (this.lastCtr === fsCtr) {
    } else if (fsCtr) {
      this.lastCtr = fsCtr;
      this.removeSlides();
      this.slides = this.mountSlides(srcArr);
    }

    this.vl = new vanillaLazy(
      {
        container: this.fsSliderEl,
        unobserve_entered: true,
        thresholds: "-2%",
        class_loaded: "is-loaded",
        callback_loaded: function (el) {
          el.parentElement.classList.add("is-loaded");

          //setTimeout(() => (el.parentElement.style.backgroundImage = ""), 1500);

          if(isDesktop()) {
            let attr = [];
            let figures = [];

            document.querySelectorAll(".swiper-zoom-container").forEach((el, index) => {
                attr.push(el.querySelector('img').getAttribute("data-src"));
                el.removeAttribute("js-lazy");  

                let newFigure = `<figure class="zoo-item" data-zoo-image='${attr[index]}'></figure>`; //
                figures.push(newFigure);
                el.innerHTML = figures[index];
            });
            
            $(".zoo-item").ZooMove({});
            document.querySelectorAll('.zoo-item').forEach((el) => {
              el.querySelector(".zoo-img").style.cursor = "url('../../img/circle-inside.png'), auto"
            })

          }
        },
        callback_finish: function () {
          this.vl.destroy();
        }.bind(this),
      },
      Array.from(this.slides)
        .map((el) => el.querySelector("img"))
        .filter((el) => el)
    );

    this.fsClose.addEventListener("click", this.closeSlider.bind(this), {
      once: true,
    },);

    this.fsSliderObj = new Swiper(this.fsSliderEl, {
      wrapperClass: "swiper-wrapper",
      slideClass: "swiper-slide",
      zoom: true,
      loop: true,
      //centeredSlides: true,
      slidesPerView: 1,
      runCallbacksOnInit: false,
      pagination: this.option.pagination,
      navigation: this.option.navigation,
      thumbs: this.option.thumbs,
      keyboard: this.option.keyboard,
      initialSlide: initialIndex,
      on: {
        beforeInit: function () {
        },
        afterInit: function (sw) {

          let ulBullets = document.querySelector('.gallery-thumbs__content')
          ulBullets.querySelectorAll('.swiper-pagination-bullet').forEach((item, index) => {
            item.innerHTML = `<span class="gallery-thumbs__el"><img src=${srcArr[index]}></img></span>`
          }); 
        },
      },
    });

    this.fsEl.classList.add("_active");
    disableScroll();
    // fsSliderF.classList.add('_active')
    // fsSliderF.querySelector('.fullscreen-slider__close').addEventListener('click', closeSlider, { once: true })
  }
  closeSlider() {

    this.fsEl.classList.remove("_active");
    enableScroll();
    this.fsEl.addEventListener(
      "transitionend",
      () => {
        if (this.vl._settings) {
          this.vl.destroy();
        }
        this.fsSliderObj.destroy();
      },
      { once: true }
    );
  }
  mountSlides(srcArr) {
    srcArr.forEach((src) => {
      const slide = this.sldTpl.content.firstElementChild.cloneNode(true);
      slide.querySelector("img").dataset.src = src;
      this.fsWrpEl.appendChild(slide);
    });
    return this.fsWrpEl.querySelectorAll(this.sldSel);
  }
  removeSlides(sldTpl, wrp, sldArr) {
    this.slides.forEach((el) => {
      el.remove();
    });
    this.slides = [];
  }
}