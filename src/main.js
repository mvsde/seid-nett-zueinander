import './main.css'

const LINK = 'https://lfda.de/news/seid-nett-zueinander-lfda-unterstuetzt-die-aktion-des-hamburger-abendblattes'
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
