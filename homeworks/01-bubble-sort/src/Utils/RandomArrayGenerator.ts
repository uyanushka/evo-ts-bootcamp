import {ArraySize, VisualizerHeight} from "../consts";

export function GenerateRandomArray(): number[] {
    const numberArray: number[] = [];

    for (let i = 0; i <= ArraySize; i++){
        const num = Math.random();
        numberArray.push(Math.round(num * VisualizerHeight));
    }

    return numberArray;
}
