//Implemented correctly only for numbers. If needed should be extended.
export function CompareNodeValues<T>(first: T, second: T): number {
    if (first === second) return 0;
    if (first < second) return -1;
    return 1;
}
