import React, { Component } from 'react';
import createArr from './canvasHelper.js';
import bubbleSort from './algorithms/bubbleSort.js';
import insertionSort from './algorithms/insertionSort.js';
import mergeSort from './algorithms/mergeSort.js';
import heapSort from './algorithms/heapSort.js';

const initialState = {
  width: 10,
  speed: 55,
  array: createArr(Math.floor(window.innerWidth / 10)),
  prevArray : [],
  shouldPause: false,
  isDone: false
};

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onUpdateSize(newSize) {
    let newWidth = window.innerWidth / newSize;
    this.setState(() => {
      return { array: createArr(newSize), width: newWidth };
    })
  }

  onUpdateSpeed(currentSpeed) {
    this.setState(() => {
      return { speed: currentSpeed };
    });
  }

  startSort(method) {
    let snapshots = [];
    switch (method) {
      case 'bubble':
        snapshots = bubbleSort(this.state.array);
        break;
      case 'insertion':
        snapshots = insertionSort(this.state.array);
        break;
      case 'merge':
        snapshots = mergeSort(this.state.array);
        break;
      case 'heap':
        snapshots = heapSort(this.state.array);
        break;
    }
    
    let i = 0;
    const timerId = setInterval(() => {
      this.setState( () => { return { array: snapshots[i] } });
      if (i !== 0) this.setState( () => { return { prevArray: snapshots[i - 1] } });
      i++
      if (this.state.shouldPause) {
        clearInterval(timerId);
        this.setState( () => { return { shouldPause: false } });
      }
      if (i === snapshots.length) {
        clearInterval(timerId);
        this.setState( () => { return { isDone: true } });
      }
    }, this.state.speed);
  }

  pauseSort() {
    this.setState( () => { return { shouldPause: true } });
  }

  render() {
    const colorMapping = [];
    this.state.prevArray.forEach( (element, i) => { 
      if (element !== this.state.array[i] || this.state.isDone) {
        colorMapping.push('green');
      } else {
        colorMapping.push('');
      }
    });

    if (this.state.isDone) {
      const pauseButton = document.querySelector('.pause');
      if (window.innerWidth < 820) {
        pauseButton.disabled = false;
        pauseButton.style.opacity = '1';
        pauseButton.style.backgroundColor = 'rgb(238, 32, 32)';
        pauseButton.innerHTML = '<b>RESET</b>';
        pauseButton.addEventListener('click', () => { document.location.reload() });
      } else {
        pauseButton.disabled = true;
        pauseButton.style.opacity = '0.3';
      }
    }

    return (
    <ul>
    {this.state.array.map( (element, i) => 
      <li 
        key={i} 
        className="bar" 
        style={{ height: element * 3.2, width: this.state.width, backgroundColor: colorMapping[i] }}
      />
    )}
    </ul>
    );
  }
}
