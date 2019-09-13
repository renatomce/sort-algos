import React, { Component } from 'react';
import createArr from './canvasHelper.js';
import bubbleSort from './algorithms/bubbleSort';
import InsertionSort from './algorithms/insertionSort.js';

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 50,
      speed: 205,
      array: createArr(50)
    }
  }

  onUpdateSize(newSize) {
    this.setState(() => {
      return { array: createArr(newSize) };
    })
  }

  onUpdateSpeed(currentSpeed) {
    this.setState(() => {
      return { speed: currentSpeed };
    });
  }

  startSort() {
    const snapshots = bubbleSort(this.state.array);
    let i = 0;
      let timerId = setInterval(() => {
        this.setState( () => {
          return { array: snapshots[i] };
        });
        i++
        if (i === snapshots.length) clearInterval(timerId);
      }, this.state.speed);
  }

  render() {
    return (
      <div>
        <ul>
        {
          this.state.array.map( (element, i) => <li key={i} className="bar" style={{ height: element * 5}}> </li>)
        }
        </ul>
      </div>
    );
  };
}
