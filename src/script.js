let size = document.querySelector('#size')
const speed = document.querySelector('#speed')
const canvas = document.querySelector('.canvas')
let startButton = document.querySelector('.start')
let stopButton = document.querySelector('.stop')
let shouldStop = false
let clicked = 0
let currentSpeed = speed.value * 100
let timerId

let hamburger = document.getElementById('menu')
let navMenu = document.querySelector('nav')
let navText = document.querySelectorAll('h2')
let methodSelector = document.querySelector('.dropdown')

const toggleMobileMenu = (sender) => {
    hamburger.classList.toggle('is-active')
    canvas.classList.toggle('mobile')
    size.classList.toggle('mobile')
    speed.classList.toggle('mobile')
    startButton.classList.toggle('mobile')
    stopButton.classList.toggle('mobile')
    navMenu.classList.toggle('mobile')
    navText.forEach( text => {
        text.classList.toggle('mobile')
    })
    methodSelector.classList.toggle('mobile')

    if (sender === 'start') {
        stopButton.classList.toggle('is-active')
        startButton.classList.toggle('is-active')
    }
    if (sender === 'stop') {
        startButton.classList.toggle('is-active')
        stopButton.classList.toggle('is-active')
    }
}

const renderBars = quantity => {
    for (let i = 0; i < quantity; i++) {
        let bar = document.createElement('li')
        bar.className = 'bar'
        let height = Math.floor(Math.random() * (+100 - +10)) + +10
        bar.innerHTML = height
        bar.setAttribute('style', `height: ${height * 2}px;`)
        canvas.appendChild(bar)
    }
}

const removeBars = () => {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }
}

const orderBarsBubble = () => {
    let i = 0
    let shouldSwitch
    let bars = document.getElementsByClassName('bar')
    for (i = 0; i < bars.length - 1; i++) {
        bars[i].setAttribute('id', 'done')
        shouldSwitch = false
        if (parseInt(bars[i].innerHTML) > parseInt(bars[i + 1].innerHTML)) {
            shouldSwitch = true
            break
        }
    }
    if (shouldSwitch) {
        bars[i + 1].setAttribute('id', 'current')
        bars[i].parentNode.insertBefore(bars[i + 1], bars[i])
    }
    if (shouldStop) {
        clearInterval(timerId)
        removeBars()
        renderBars(size.value)
        shouldStop = false
        return
    }
}

size.oninput = () => {
    removeBars()
    renderBars(size.value)
}

speed.oninput = () => {
    currentSpeed = speed.value * 100
}

startButton.addEventListener('click', function () {
    if (window.innerWidth >= 820) {
        startButton.style.display = 'none'
        stopButton.style.display = 'block'
    }
    else {
        toggleMobileMenu('start')
    }
    timerId = setInterval(orderBarsBubble, currentSpeed)
})

stopButton.addEventListener('click', function () {
    if (window.innerWidth >= 820) {
        stopButton.style.display = 'none'
        startButton.style.display = 'block'
    }
    else {
        startButton.classList.toggle('is-active')
        stopButton.classList.toggle('is-active')
    }
    shouldStop = true
})

hamburger.addEventListener('click', function () {
    toggleMobileMenu()
})

if (window.innerWidth < 820) {
    size.setAttribute('max', '35')
    size.setAttribute('value', '35')
    renderBars(35)
} else if (window.innerWidth > 1400) {
    size.setAttribute('max', '100')
    size.setAttribute('value', '100')
    renderBars(160)
} else {
    renderBars(100)
}