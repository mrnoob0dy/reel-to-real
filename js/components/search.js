import { closeAllPopups } from "../functions/closeAllPopups.js";

const search = document.querySelector(".header-search");

if (search) {
  const searchInput = search.querySelector(".header-search__input");
  const searchResult = document.querySelector(".search-result");

  searchInput.addEventListener("input", e => {
    closeAllPopups();

    if (e.currentTarget.value.length > 0) {
      searchResult.classList.add("search-result--visible");
    } else {
      searchResult.classList.remove("search-result--visible");
    }
  });
}
