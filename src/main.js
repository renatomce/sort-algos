'use strict';

import UI from './UI.js';
import Canvas from './Canvas.js';
import React from 'react';
import ReactDOM from 'react-dom';

new UI();
ReactDOM.render(React.createElement(Canvas), document.querySelector('.canvas'));
