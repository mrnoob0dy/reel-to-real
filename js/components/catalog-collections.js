import { closeAllPopups } from "../functions/closeAllPopups.js";

const megamenus = document.querySelectorAll(".megamenu");

if (megamenus.length) {
  const headerBtns = document.querySelectorAll(".header-btn");
  const catalogMenu = document.querySelector(".catalog-menu");
  const collectionsMenu = document.querySelector(".collections-menu");

  headerBtns.forEach(el => {
    if (el.classList.contains("header__catalog")) {
      el.addEventListener("click", e => {
        const isMenuVisible = catalogMenu.classList.contains("megamenu--visible");
        closeAllPopups();
        if (!isMenuVisible) {
          catalogMenu.classList.add("megamenu--visible");
          e.currentTarget.classList.add("header-btn--active");
        } else {
          catalogMenu.classList.remove("megamenu--visible");
          e.currentTarget.classList.remove("header-btn--active");
        }
      });
    }

    if (el.classList.contains("header__collections")) {
      el.addEventListener("click", e => {
        const isMenuVisible = collectionsMenu.classList.contains("megamenu--visible");
        closeAllPopups();
        if (!isMenuVisible) {
          collectionsMenu.classList.add("megamenu--visible");
          e.currentTarget.classList.add("header-btn--active");
        } else {
          collectionsMenu.classList.remove("megamenu--visible");
          e.currentTarget.classList.remove("header-btn--active");
        }
      });
    }
  });
}
