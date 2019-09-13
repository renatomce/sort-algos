import InputHandler from './InputHandler.js'

export default class UI {
  constructor() {
    this.input = {
      speed : document.querySelector('#speed'),
      size : document.querySelector('#size'),
      canvas: document.querySelector('.canvas'),
      startButton : document.querySelector('.start'),
      stopButton : document.querySelector('.stop'),
      hamburger : document.getElementById('menu'),
      navMenu : document.querySelector('nav'),
      navText : document.querySelectorAll('h2'),
      methodSelector : document.querySelector('.dropdown'),
    }
    this.currentSize = size.value;
    this.currentSpeed = speed.value * 100;

    new InputHandler(this);
  }

  startExecution() {
    if (window.innerWidth >= 820) {
      this.input.startButton.style.display = 'none';
      this.input.stopButton.style.display = 'block';
    }
    else {
      this.toggleMobileMenu('start');
    }
  }

  stopExecution() {
    if (window.innerWidth >= 820) {
      this.input.stopButton.style.display = 'none';
      this.input.startButton.style.display = 'block';
    }
    else {
      this.toggleMobileMenu('stop')
    }
  }

  updateSpeed() {
    this.currentSpeed = this.input.speed.value * 100;
  }

  updateSize() {
    this.currentSize = this.input.size.value;
  }
  
  toggleMobileMenu(sender) {
    this.input.hamburger.classList.toggle('is-active');
    this.input.canvas.classList.toggle('mobile');
    this.input.size.classList.toggle('mobile');
    this.input.speed.classList.toggle('mobile');
    this.input.startButton.classList.toggle('mobile');
    this.input.stopButton.classList.toggle('mobile');
    this.input.navMenu.classList.toggle('mobile');
    this.input.navText.forEach( text => {
        text.classList.toggle('mobile');
    })
    this.input.methodSelector.classList.toggle('mobile');

    if (sender === 'start') {
      this.input.stopButton.classList.toggle('is-active');
      this.input.startButton.classList.toggle('is-active');
    }
    if (sender === 'stop') {
      this.input.startButton.classList.toggle('is-active');
      this.input.stopButton.classList.toggle('is-active');
    }
  }
}
