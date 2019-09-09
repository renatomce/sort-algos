'use strict';

import UI from './UI.js';
import Canvas from './Canvas.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const e = document.querySelector('.canvas');

new UI();
ReactDOM.render(<Canvas />, e);
