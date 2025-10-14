const customSelects = document.querySelectorAll(".custom-select");

if (customSelects.length) {
  customSelects.forEach(select => {
    const dropdown = select.querySelector(".custom-select__dropdown");
    const btn = select.querySelector(".custom-select__btn");
    const chooses = select.querySelectorAll(".custom-select__choose");

    btn.addEventListener("click", e => {
      dropdown.classList.toggle("custom-select__dropdown--visible");
    });

    chooses.forEach(choose => {
      choose.addEventListener("click", e => {
        const text = e.currentTarget.textContent;
        dropdown.classList.remove("custom-select__dropdown--visible");

        chooses.forEach(item => {
          item.classList.remove("custom-select__choose--active");
        });
        e.currentTarget.classList.add("custom-select__choose--active");
        btn.querySelector("span").textContent = text;
      });
    });
    document.addEventListener("click", e => {
      const withinBoundries = e.composedPath().includes(select);

      if (!withinBoundries) {
        dropdown.classList.remove("custom-select__dropdown--visible");
      }
    });
  });
}
