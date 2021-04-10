import React from 'react';
import './App.css';
import {Visualizer} from "./Components/Visualizer";
import {GenerateRandomArray} from "./Utils/RandomArrayGenerator";
import {SortElementsByHeight} from "./Utils/ArraySorter";
import {Status, SwapInterval} from "./consts";

export interface AppProps {
    arraySize: number;
}

export interface AppState {
    numberArray: number[];
    status: Status;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        numberArray: GenerateRandomArray(this.props.arraySize),
        status: Status.NotSolved
    }

    private newSet(): void {
        this.setState({
            numberArray: GenerateRandomArray(this.props.arraySize),
            status: Status.NotSolved
        });
    }

    private async sort(): Promise<void> {
        const elements = Array.from(document.querySelectorAll("#visualizer .element")).map((el) => el as HTMLElement);
        await SortElementsByHeight(elements, SwapInterval);

        this.setState({
            status: Status.Sorted
        });
    }

    render(): JSX.Element {
        return <div className="App">
            <header className="pageHeader">Bubble sort 🛁</header>
            <Visualizer numberArray={this.state.numberArray}/>
            <div id="controls">
                <button onClick={this.newSet.bind(this)}>New set</button>
                <button onClick={this.sort.bind(this)} disabled={this.state.status === Status.Sorted}>Start</button>
            </div>
            <div id="status">{this.state.status}</div>
        </div>
    }
}

export default App;
