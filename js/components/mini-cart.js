import { closeAllPopups } from "../functions/closeAllPopups.js";

const miniCart = document.querySelector(".mini-cart");

if (miniCart) {
  const miniCartBtn = document.querySelector(".header__cart");
  const miniCartClose = document.querySelector(".mini-cart__close");
  const overlay = document.querySelector(".overlay");

  miniCartBtn.addEventListener("click", () => {
    closeAllPopups();
    miniCart.classList.toggle("mini-cart--active");
    overlay.classList.toggle("overlay--visible");
  });

  miniCartClose.addEventListener("click", () => {
    miniCart.classList.remove("mini-cart--active");
    overlay.classList.remove("overlay--visible");
  });
}
