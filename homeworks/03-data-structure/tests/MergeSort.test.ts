import {mergeSort} from "../src/MergeSort";
import {CompareNodeValues} from "../src/helpers/Comparator";

describe("mergeSort", () => {
    test("called with array should return sorted array", () => {
        const array = Array.from({length: 50}, () => Math.floor(Math.random() * 100));
        const sorted = mergeSort(array, CompareNodeValues);
        expect(sorted).toEqual(array.sort(CompareNodeValues));
    });

    test("called with array with length < 2 should return that array", () => {
        expect(mergeSort<number>([6], CompareNodeValues)).toEqual([6]);
    });

    test("called with empty array should return that array", () => {
        expect(mergeSort([], CompareNodeValues)).toEqual([]);
    });
});
