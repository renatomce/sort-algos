function orderBarsBubble()  {
    let i = 0;
    let shouldSwitch;
    let bars = document.getElementsByClassName('bar');
    for (i = 0; i < bars.length - 1; i++) {
        bars[i].setAttribute('id', 'done');
        shouldSwitch = false;
        if (parseInt(bars[i].innerHTML) > parseInt(bars[i + 1].innerHTML)) {
            shouldSwitch = true;
            break;
        }
    }
    if (shouldSwitch) {
        bars[i + 1].setAttribute('id', 'current');
        bars[i].parentNode.insertBefore(bars[i + 1], bars[i]);
    }
    if (shouldStop) {
        clearInterval(timerId);
        removeBars();
        renderBars(size.value);
        shouldStop = false;
        return;
    }
}
