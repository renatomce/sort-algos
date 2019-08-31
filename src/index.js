const arraySize = document.querySelector('.array-size')
const bar = document.querySelector('.bar')
const canvas = document.querySelector('.canvas')
const defaultSize = arraySize.value

const addBar = () => {
    let newBar = bar.cloneNode(false)
    canvas.appendChild(newBar)
}

const removeBar = () => {
    let toRemove = canvas.firstElementChild
    canvas.remove(toRemove)
}

for (let i = 0; i < defaultSize; i++) {
    addBar()
}

arraySize.oninput = () => {
    if (arraySize.value < 40 && arraySize.value > 20) removeBar()
    if (arraySize.value > 40 && arraySize.value < 80) addBar()
}

