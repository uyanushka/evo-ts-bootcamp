import React from 'react';
import './App.css';
import {Visualizer} from "./Components/Visualizer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="pageHeader">Bubble sort 🛁</header>
            <Visualizer></Visualizer>
            <div id="controls">
                <button>New set</button>
                <button>Start</button>
            </div>
            <div id="status">Not started</div>
        </div>
    );
}

export default App;
