import {VisualizerHeight} from "../consts";

export function GenerateRandomArray(arraySize: number): number[] {
    const numberArray: number[] = [];

    for (let i = 0; i <= arraySize; i++) {
        const num = Math.random();
        numberArray.push(Math.round(num * VisualizerHeight));
    }

    return numberArray;
}
