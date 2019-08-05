import './main.css'

const HREF = 'https://www.abendblatt.de/hamburg/article226649773/Abendblatt-startet-Aktion-fuer-mehr-Mitmenschlichkeit.html'
const TARGET = '_blank'
const ALT = 'Seid nett zueinander (Hamburger Abendblatt)'

const link = document.createElement('a')
link.href = HREF
link.target = TARGET
link.classList.add('seid-nett-zueinander-link')

const image = document.createElement('img')
image.src = require('./badge.svg')
image.alt = ALT
image.classList.add('seid-nett-zueinander-image')

link.appendChild(image)

document.body.appendChild(link)
