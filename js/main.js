var consulta = window.matchMedia('(max-width: 767px)')
consulta.addListener(mediaQuery)

var burgerButton = document.getElementById('burger-button')
var menu = document.getElementById('menu')

function toggleMenu () {
  menu.classList.toggle('is-active')
  // burgerButton.classList.toggle('icon-close')
  console.log("Apretado")
  
}

// function showMenu () {
//   menu.classList.toggle('is-active')
//   // burgerButton.classList.add('icon-close')
// }

// function hideMenu () {
//   menu.classList.toggle('active')
//   burgerButton.classList.remove('icon-close')
// }

function mediaQuery () {
  if (consulta.matches) {
    burgerButton.addEventListener('click', toggleMenu)
  } else {
    burgerButton.removeEventListener('click', toggleMenu)
  }
}
mediaQuery()