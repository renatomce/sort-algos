export default class InputHandler {
  constructor(ui) {
    ui.input.hamburger.addEventListener('click', () => {
      ui.toggleMobileMenu();
    });

    ui.input.methodSelector.addEventListener('change', () => {
      switch (ui.input.methodSelector.value) {
        case 'bubble':
          ui.toggleInfo(0);
        break;
        case 'insertion':
          ui.toggleInfo(1);
        break;
        case 'merge':
          ui.toggleInfo(2);
        break;
        case 'heap':
          ui.toggleInfo(3);
        break;
      }
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
