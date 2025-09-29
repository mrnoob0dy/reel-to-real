import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const mainProductsSlider = document.querySelector(".products__slider");

if (mainProductsSlider) {
  const swiper = new Swiper(mainProductsSlider, {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    watchSlidesProgress: true,

    navigation: {
      nextEl: ".products__slider-btn--next",
      prevEl: ".products__slider-btn--prev",
    },

    scrollbar: {
      el: ".products__scrollbar",
    },
  });
}
