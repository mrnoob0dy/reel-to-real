const productPopupsBtns = document.querySelectorAll(".product-hero__btn");
const productPopups = document.querySelectorAll(".product-hero__popup");
const productPopupClose = document.querySelectorAll(".product-hero__popup-close");

if (productPopupsBtns.length) {
  productPopupsBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      const activeTab = e.currentTarget.dataset.tab;

      productPopups.forEach(popup => {
        popup.classList.remove("product-hero__popup--active");
      });
      document
        .querySelector(`.product-hero__popup[data-target="${activeTab}"]`)
        .classList.add("product-hero__popup--active");
    });
  });

  productPopupClose.forEach(btn => {
    btn.addEventListener("click", e => {
      productPopups.forEach(popup => {
        popup.classList.remove("product-hero__popup--active");
      });
    });
  });
}
