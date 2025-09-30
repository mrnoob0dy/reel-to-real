import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const mainProductsInner = document.querySelectorAll(".products__inner");
const mainProductsTabsBtns = document.querySelectorAll(".products-tabs__btn");

if (mainProductsInner.length) {
  mainProductsTabsBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      const activeTab = e.currentTarget.dataset.tab;
      mainProductsTabsBtns.forEach(item => {
        item.classList.remove("products-tabs__btn--active");
        e.currentTarget.classList.add("products-tabs__btn--active");

        mainProductsInner.forEach(inner => {
          inner.classList.remove("products__inner--active");
        });
        document.querySelector(`.products__inner[data-target="${activeTab}"]`).classList.add("products__inner--active");
      });
    });
  });

  mainProductsInner.forEach(inner => {
    const swiper = new Swiper(inner.querySelector(".products__slider"), {
      slidesPerView: 4,
      spaceBetween: 24,
      loop: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: inner.querySelector(".products__slider-btn--next"),
        prevEl: inner.querySelector(".products__slider-btn--prev"),
      },

      scrollbar: {
        el: inner.querySelector(".products__scrollbar"),
      },
    });
  });
}
