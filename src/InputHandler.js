export default class InputHandler {
  constructor(ui) {
    ui.input.hamburger.addEventListener('click', () => {
      ui.toggleMobileMenu();
    });

    ui.input.startButton.addEventListener('click', () => { 
      ui.startExecution();
      window.Canvas.startSort(ui.input.methodSelector.value);
      if (ui.input.methodSelector.value === 'merge' ||
          ui.input.methodSelector.value === 'heap'
      ) {
        ui.input.pauseButton.style.opacity = '0.3';
        ui.input.pauseButton.disabled = true;
      }
    });

    ui.input.pauseButton.addEventListener('click', () => {
      ui.pauseExecution();
      window.Canvas.pauseSort();
    });

    ui.input.restartButton.addEventListener('click', () => {
      document.location.reload();
    })

    ui.input.size.addEventListener('input', () => {
      ui.updateSize();
      window.Canvas.onUpdateSize(ui.currentSize);
    });

    ui.input.speed.addEventListener('input', () => {
      ui.updateSpeed();
      window.Canvas.onUpdateSpeed(Math.floor(ui.currentSpeed));
    });
  }
}
