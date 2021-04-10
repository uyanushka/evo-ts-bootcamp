import {VisualisationDelay} from "./VisualisationDelay";

export async function SortElementsByHeight(unsortedArray: HTMLElement[], swapInterval: number): Promise<void> {
    const sorted = unsortedArray.slice();

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
            if (getHeightOfElement(sorted[j]) > getHeightOfElement(sorted[j + 1])) {
                await VisualisationDelay(swapInterval);
                swapStyles(sorted[j], sorted[j + 1]);
            }
        }
    }
}

function getHeightOfElement(element: HTMLElement): number {
    return parseInt(element.style.height);
}

function swapStyles(element1: HTMLElement, element2: HTMLElement): void {
    const swap = getHeightOfElement(element1);
    element1.setAttribute(`style`, `height:${getHeightOfElement(element2)}px`);
    element2.setAttribute(`style`, `height:${swap}px`);
}
