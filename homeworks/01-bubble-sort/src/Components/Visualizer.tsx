import React, {CSSProperties} from "react";
import "./Visualizer.css";
import {VisualizerHeight} from "../consts";

export interface VisualizerProps {
    numberArray: number[]
}

export function Visualizer(props: VisualizerProps): JSX.Element {
    const {numberArray} = props;

    const generateElements = (): JSX.Element[] => {
        const elementsArray = numberArray.map((number, index) => {
            const elStyle: CSSProperties = {height: `${number}px`};
            return <div key={index} className={"element"} style={elStyle}/>
        });

        return elementsArray;
    }

    const visStyle: CSSProperties = {height: `${VisualizerHeight}px`};

    return <div id="visualizer" style={visStyle}>
        {generateElements()}
    </div>
}
