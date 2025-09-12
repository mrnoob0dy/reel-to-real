export const closeAllPopups = () => {
  const megamenus = document.querySelectorAll(".megamenu");
  const miniCart = document.querySelector(".mini-cart");
  const overlay = document.querySelector(".overlay");

  megamenus.forEach(menu => {
    menu.classList.remove("megamenu--visible");
  });
  miniCart.classList.remove("mini-cart--active");
  overlay.classList.remove("overlay--visible");
};
