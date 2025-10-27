import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const productSlider = document.querySelector(".product-hero__slider");

if (productSlider) {
  const swiper = new Swiper(productSlider, {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    watchSlidesProgress: true,

    pagination: {
      el: ".product-hero__pag",
      clickable: true,
    },
  });
}
