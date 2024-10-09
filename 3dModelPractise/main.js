import './sass/style.scss'


const dropdownbtn = document.getElementById('dropdown-btn')
const dropdownElmnts = document.getElementById('dropdown-elements')

const toIntro = document.getElementById('to-introduction')
const intro = document.getElementById('introduction')

const toBegin = document.getElementById('to-begin')
const begin = document.getElementById('begin')

const toPre = document.getElementById('to-pre')
const pre = document.getElementById('predecessors')

const toEvo = document.getElementById('to-evo')
const evo = document.getElementById('evolution')

const toBreak = document.getElementById('to-break')
const breakthroughs = document.getElementById('breakthroughs')

const toEnd = document.getElementById('to-end')
const ending = document.getElementById('ending')

dropdownbtn.addEventListener('click', function(element) {
    dropdownElmnts.classList.toggle('opened')
    dropdownbtn.classList.toggle('clicked')
})

toBegin.addEventListener('click', function(elm) {
    begin.scrollIntoView ({
        block: "center",
        behavior: 'smooth',
    })
})

toIntro.addEventListener('click', function(elm) {
    intro.scrollIntoView ({
        block: "center",
        behavior: "smooth",
    })
})


toPre.addEventListener('click', function(elm) {
    pre.scrollIntoView ({
        block: "start",
        behavior: 'smooth',
    })
})

toEvo.addEventListener('click', function(elm) {
    evo.scrollIntoView ({
        block: "start",
        behavior: 'smooth',
    })
})

toBreak.addEventListener('click', function(elm) {
    breakthroughs.scrollIntoView ({
        block: 'start',
        behavior: 'smooth',
    })
})

toEnd.addEventListener('click', function(elm) {
    ending.scrollIntoView ({
        block: 'start',
        behavior: 'smooth',
    })
})