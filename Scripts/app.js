

document.querySelector('.fa-bars').addEventListener('click', () => {
  document.querySelectorAll('.pop-ul ul li')
    .forEach(elem => {
      elem.classList.toggle('transform')
    })

  // document.querySelector('.contact')
  //   .classList.toggle('contact-border')
})

window.addEventListener('scroll', () => {
  document.querySelectorAll('.pop-ul ul li')
    .forEach(elem => {
      elem.classList.remove('transform')
    })
})


