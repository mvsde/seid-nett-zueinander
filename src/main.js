import './main.css'

const LINK = 'https://www.abendblatt.de/hamburg/article226649773/Abendblatt-startet-Aktion-fuer-mehr-Mitmenschlichkeit.html'
const LINK_CLASS = 'seid-nett-zueinander-link'
const IMAGE_CLASS = 'seid-nett-zueinander-image'
const IMAGE_ALT = 'Seid nett zueinander (Hamburger Abendblatt)'

if (!document.querySelector(`.${LINK_CLASS}`)) {
  const link = document.createElement('a')
  link.href = LINK
  link.classList.add(LINK_CLASS)

  const image = document.createElement('img')
  image.src = require('./badge.svg')
  image.alt = IMAGE_ALT
  image.classList.add(IMAGE_CLASS)

  link.appendChild(image)
  document.body.appendChild(link)
}
