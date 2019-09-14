'use strict';

import UI from './UI.js';
import Canvas from './Canvas.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

new UI();
ReactDOM.render(<Canvas ref={(Canvas) => {window.Canvas = Canvas}} />, document.querySelector('.canvas'));
