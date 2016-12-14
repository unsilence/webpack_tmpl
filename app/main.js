/**
var greeter = require('./Greeter.js');

document.getElementById('root').appendChild(new greeter());
*/

import React from 'react';
import {render} from 'react-dom';

import Greeter from './Greeter';

import '../main.css'

render(<Greeter /> ,document.getElementById('root'));