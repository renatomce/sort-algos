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
      methodInfo: document.querySelector('.information')
    }
    this.input.size.setAttribute('max', Math.floor(window.innerWidth / 10));
    this.input.size.setAttribute('value', Math.floor(window.innerWidth / 10));
    this.currentSize = size.value;
    this.currentSpeed = speed.value;

    new InputHandler(this);
  }

  startExecution() {
    this.input.speed.disabled = true;
    this.input.size.disabled = true;
    this.input.methodSelector.disabled = true;
    this.input.methodSelector.style.opacity = '0.3';
    this.input.speed.style.opacity = '0.3';
    this.input.size.style.opacity = '0.3';
    this.input.startButton.classList.toggle('is-active');
    this.input.pauseButton.classList.toggle('is-active');
  }

  pauseExecution() {
    this.input.speed.disabled = false;
    this.input.size.disabled = false;
    this.input.speed.style.opacity = '1';
    this.input.size.style.opacity = '1';
    this.input.startButton.classList.toggle('is-active');
    this.input.pauseButton.classList.toggle('is-active');
  }

  updateSpeed() {
    this.currentSpeed = this.input.speed.value * 100;
  }

  updateSize() {
    this.currentSize = this.input.size.value;
  }
  
  toggleMobileMenu() {
    this.input.hamburger.classList.toggle('is-active');
    this.input.canvas.classList.toggle('mobile');
    this.input.size.classList.toggle('mobile');
    this.input.speed.classList.toggle('mobile');
    this.input.restartButton.classList.toggle('mobile');
    this.input.navMenu.classList.toggle('mobile');
    this.input.navText.forEach( text => {
        text.classList.toggle('mobile');
    })
    this.input.methodSelector.classList.toggle('mobile');
    this.input.startButton.classList.toggle('mobile');
    this.input.pauseButton.classList.toggle('mobile');
  }

  toggleInfo(sender) {
    for (let i = 0; i < this.input.methodInfo.children.length; i++) {
      if (i === sender) {
        this.input.methodInfo.children[i].setAttribute('style', 'display: flex;');
      } else {
        this.input.methodInfo.children[i].setAttribute('style', 'display: none;');
      }
    }
  }
}
