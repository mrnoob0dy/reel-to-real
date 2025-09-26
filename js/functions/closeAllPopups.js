export const closeAllPopups = () => {
  const megamenus = document.querySelectorAll(".megamenu");
  const miniCart = document.querySelector(".mini-cart");
  const overlay = document.querySelector(".overlay");
  const searchResult = document.querySelector(".search-result");
  const headerBtns = document.querySelectorAll(".header-btn");

  megamenus.forEach(menu => {
    menu.classList.remove("megamenu--visible");
  });
  miniCart.classList.remove("mini-cart--active");
  overlay.classList.remove("overlay--visible");
  searchResult.classList.remove("search-result--visible");
  headerBtns.forEach(btn => {
    btn.classList.remove("header-btn--active");
  });
};
