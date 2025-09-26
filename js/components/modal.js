const modal = document.querySelector(".modal");

if (modal) {
  const loginBtn = document.querySelector(".header__enter");
  const modalCloseBtn = document.querySelector(".modal__close");
  const nextStepBtn = document.querySelector(".enter-modal__form-btn");
  const firstStep = document.querySelector(".enter-modal__step--first");
  const secondStep = document.querySelector(".enter-modal__step--second");
  const backStep = document.querySelector(".enter-modal__back");

  loginBtn.addEventListener("click", () => {
    modal.classList.add("modal--open");
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("modal--open");
  });

  nextStepBtn.addEventListener("click", () => {
    firstStep.classList.add("enter-modal__step--first-close");
    secondStep.classList.add("enter-modal__step--second-open");
  });

  backStep.addEventListener("click", () => {
    firstStep.classList.remove("enter-modal__step--first-close");
    secondStep.classList.remove("enter-modal__step--second-open");
  });
}
