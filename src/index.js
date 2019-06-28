import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './ReactotronConfig'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './index.css';
import './styles/main.scss';
import App from './App';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
)