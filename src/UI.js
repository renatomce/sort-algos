import InputHandler from './InputHandler.js'

export default class UI {
  constructor() {
    this.input = {
      speed : document.querySelector('#speed'),
      size : document.querySelector('#size'),
      canvas: document.querySelector('.canvas'),
      startButton : document.querySelector('.start'),
      pauseButton : document.querySelector('.pause'),
      restartButton : document.querySelector('.restart'),
      hamburger : document.getElementById('menu'),
      navMenu : document.querySelector('nav'),
      navText : document.querySelectorAll('h2'),
      methodSelector : document.querySelector('.dropdown'),
    }
    this.input.size.setAttribute('max', Math.floor(window.innerWidth / 10));
    this.input.size.setAttribute('value', Math.floor(window.innerWidth / 10));
    this.currentSize = size.value;
    this.currentSpeed = speed.value * 100;

    new InputHandler(this);
  }

  startExecution() {
    if (window.innerWidth >= 820) {
      this.input.startButton.style.display = 'none';
      this.input.pauseButton.style.display = 'block';
    }
    else {
      this.toggleMobileMenu('start');
    }
    this.input.speed.disabled = true;
    this.input.size.disabled = true;
  }

  stopExecution() {
    if (window.innerWidth >= 820) {
      this.input.pauseButton.style.display = 'none';
      this.input.startButton.style.display = 'block';
    }
    else {
      this.toggleMobileMenu('pause');
    }
    this.input.speed.disabled = false;
    this.input.size.disabled = false;
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
    this.input.pauseButton.classList.toggle('mobile');
    this.input.restartButton.classList.toggle('mobile');
    this.input.navMenu.classList.toggle('mobile');
    this.input.navText.forEach( text => {
        text.classList.toggle('mobile');
    })
    this.input.methodSelector.classList.toggle('mobile');

    if (sender === 'start') {
      this.input.pauseButton.classList.toggle('is-active');
      this.input.startButton.classList.toggle('is-active');
    }
    if (sender === 'pause') {
      this.input.startButton.classList.toggle('is-active');
      this.input.pauseButton.classList.toggle('is-active');
    }
  }
}
