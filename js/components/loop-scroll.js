const loopScroll = document.querySelector(".loop-scroll");

if (loopScroll) {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    loopScroll.setAttribute("data-animated", true);

    const scrollerInner = loopScroll.querySelector(".loop-scroll__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }
}
