export default class InputHandler {
  constructor(ui) {
    ui.input.hamburger.addEventListener('click', () => {
      ui.toggleMobileMenu()
    });

    ui.input.startButton.addEventListener('click', () => { 
      ui.startExecution();
      window.Canvas.startSort();
    });

    ui.input.stopButton.addEventListener('click', () => {
      ui.stopExecution();
      window.Canvas.decrement();
    });

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
