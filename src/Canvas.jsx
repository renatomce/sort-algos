import React, { Component } from 'react';
import createArr from './canvasHelper.js';
import bubbleSort from './algorithms/bubbleSort';
import insertionSort from './algorithms/insertionSort.js';

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 10,
      speed: 55,
      array: createArr(Math.floor(window.innerWidth / 10)),
      shouldPause: false
    }
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
    }
    
    let i = 0;
    let timerId = setInterval(() => {
      this.setState( () => { return { array: snapshots[i] } });
      i++
      if (i === snapshots.length || this.state.shouldPause) {
        clearInterval(timerId);
        this.setState( () => { return { shouldPause: false } });
      }
    }, this.state.speed);
    
  }

  pauseSort() {
    this.setState( () => { return { shouldPause: true } });
  }

  render() {
    return (
      <ul>
      {
        this.state.array.map( (element, i) => <li key={i} className="bar" style={{ height: element * 3, width: this.state.width}}> </li>)
      }
      </ul>
    );
  };
}
