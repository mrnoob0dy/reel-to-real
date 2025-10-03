const toTopBtn = document.querySelector('.to-top')

window.addEventListener('scroll', () => {
  if(window.scrollY >= 200) {
    toTopBtn.classList.add('to-top--visible')
  } else {
    toTopBtn.classList.remove('to-top--visible')
  }
})