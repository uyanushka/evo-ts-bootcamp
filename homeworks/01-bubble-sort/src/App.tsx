import React from 'react';
import './App.css';
import {Visualizer} from "./Components/Visualizer";
import {GenerateRandomArray} from "./Utils/RandomArrayGenerator";

export interface AppProps {
    arraySize: number;
}

export interface AppState {
    numberArray: number[]
}

class App extends React.Component<AppProps, AppState> {
    state = {
        numberArray: GenerateRandomArray(this.props.arraySize)
    }

    private newSet(): void {
        this.setState({numberArray: GenerateRandomArray(this.props.arraySize)});
    }

    render(): JSX.Element {
        return <div className="App">
            <header className="pageHeader">Bubble sort 🛁</header>
            <Visualizer numberArray={this.state.numberArray}/>
            <div id="controls">
                <button onClick={this.newSet.bind(this)}>New set</button>
                <button>Start</button>
            </div>
            <div id="status">Not started</div>
        </div>
    }
}

export default App;
