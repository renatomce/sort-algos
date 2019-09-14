export default class InputHandler {
  constructor(ui) {
    ui.input.hamburger.addEventListener('click', () => {
      ui.toggleMobileMenu()
    });

    ui.input.startButton.addEventListener('click', () => { 
      ui.startExecution();
      window.Canvas.startSort(ui.input.methodSelector.value);
    });

    ui.input.pauseButton.addEventListener('click', () => {
      ui.stopExecution();
      window.Canvas.pauseSort();
    });

    ui.input.restartButton.addEventListener('click', () => {
      window.location.reload();
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
