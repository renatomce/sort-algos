const size = document.querySelector('#size')
const speed = document.querySelector('#speed')
const canvas = document.querySelector('.canvas')
const startButton = document.querySelector('#sort')
let clicked = 0
const defaultSize = size.value
let currentSpeed = speed.value * 100

let width = window.innerWidth
let height = window.innerHeight

const renderBars = (quantity) => {
    for (let i = 0; i < quantity; i++) {
        let bar = document.createElement('li')
        bar.className = 'bar'
        let height = Math.floor(Math.random() * (+150 - +10)) + +10
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
    let switching = true
    let i = 0
    let shouldSwitch
    while (switching) {
        switching = false
        let bars = document.getElementsByClassName('bar')
        const swapBars = () => {
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
//              bars[i].setAttribute('id', 'tbd')
                bars[i].parentNode.insertBefore(bars[i + 1], bars[i])
                switching = true
            }
        }
        setInterval(swapBars, currentSpeed)
    }
}

renderBars(defaultSize)

window.onresize = () => {
    width = window.innerWidth
    height = window.innerHeight
}

size.oninput = () => {
    removeBars()
    renderBars(size.value)
}

speed.oninput = () => {
    currentSpeed = speed.value * 100
    console.log(currentSpeed)
}

startButton.addEventListener('click', function () {
    clicked++
    if (clicked > 1) location.reload()
    orderBarsBubble()
    startButton.innerHTML = '<b>STOP</b>'
})