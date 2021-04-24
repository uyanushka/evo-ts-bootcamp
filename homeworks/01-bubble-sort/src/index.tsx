import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ArraySize} from "./consts";

ReactDOM.render(
    <React.StrictMode>
        <App arraySize={ArraySize}/>
    </React.StrictMode>,
    document.getElementById('root')
);
