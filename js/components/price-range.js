const filterPrices = document.querySelectorAll(".catalog-filter__price");

if (filterPrices.length) {
  filterPrices.forEach(item => {
    const priceRange = item.querySelector(".price-range");
    const priceInputMin = document.querySelector(".catalog-filter__price-input--min");
    const priceInputMax = document.querySelector(".catalog-filter__price-input--max");

    noUiSlider.create(priceRange, {
      start: [0, 10000],
      connect: true,
      range: {
        min: 0,
        max: 10000,
      },
    });

    priceRange.noUiSlider.on("update", function (values, handle) {
      if (handle) {
        priceInputMax.value = parseInt(values[handle]);
      } else {
        priceInputMin.value = parseInt(values[handle]);
      }
    });

    priceInputMin.addEventListener("change", function () {
      priceRange.noUiSlider.set([this.value]);
    });
    priceInputMax.addEventListener("change", function () {
      priceRange.noUiSlider.set([null, this.value]);
    });
  });
}
