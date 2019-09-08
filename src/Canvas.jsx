'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canvas: false };
  }

  render() {
    if (this.state.canvas) {
      return 'Canvas goes here';
    }

    return (
      <button onClick={() => this.setState({ canvas: true })}>
      Canvas
      </button>
    );
  }
}
