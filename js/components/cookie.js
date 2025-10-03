const cookieBlock = document.querySelector('.cookie-block')
const cookieBlockBtn = document.querySelector('.cookie-block__btn')

cookieBlockBtn.addEventListener('click', () => {
  cookieBlock.classList.add('cookie-block--close')
})