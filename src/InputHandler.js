export default class InputHandler {
  constructor(ui) {
    ui.input.hamburger.addEventListener('click', () => { ui.toggleMobileMenu() });
    ui.input.startButton.addEventListener('click', () => { ui.startExecution() });
    ui.input.stopButton.addEventListener('click', () => { ui.stopExecution() });
    ui.input.size.oninput = () => { ui.updateSize() };
    ui.input.speed.oninput = () => { ui.updateSpeed() };
  }
}
