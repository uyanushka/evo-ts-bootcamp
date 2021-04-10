import React, {CSSProperties} from "react";
import {GenerateRandomArray} from "../Utils/RandomArrayGenerator";
import "./Visualizer.css";
import {VisualizerHeight} from "../consts";

export class Visualizer extends React.Component {
    generateElements(): JSX.Element[] {
        const randomArray = GenerateRandomArray();

        const elementsArray = randomArray.map((number, index) => {
            const elStyle: CSSProperties = {height: `${number}px`};
            return <div key={index} className={"element"} style={elStyle}/>
        });

        return elementsArray;
    }

    render(): JSX.Element {
        const elements = this.generateElements();

        const visStyle: CSSProperties = {height: `${VisualizerHeight}px`};

        return <div id="visualizer" style={visStyle}>
            {elements}
        </div>
    }
}
