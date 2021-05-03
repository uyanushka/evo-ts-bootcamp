import {CompareNodeValues} from "../src/helpers/Comparator";

describe("Comparator.CompareNodeValues", () => {
    test("should return 0 if numbers are equal", () => {
        expect(CompareNodeValues(1, 1)).toEqual(0)
    });

    test("should return -1 if first value is less than second", () => {
        expect(CompareNodeValues(1, 5)).toEqual(-1)
    });

    test("should return 1 if first value is greater than second", () => {
        expect(CompareNodeValues(5, 1)).toEqual(1)
    });
})
