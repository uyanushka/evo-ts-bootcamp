export type Comparator<T> = (first: T, second: T) => number;

export function mergeSort<T>(array: T[], compare: Comparator<T>): T[] {
    if (array.length <= 1) return array;

    const halfSize = Math.floor(array.length / 2);

    const first = array.slice(0, halfSize);
    const second = array.slice(halfSize);

    return merge(
        mergeSort(first, compare),
        mergeSort(second, compare),
        compare);
}

function merge<T>(first: T[], second: T[], compare: Comparator<T>): T[] {
    const result: T[] = [];

    while (first.length && second.length) {
        const value = (compare(first[0], second[0]) === -1) ? first.shift() : second.shift();
        // @ts-ignore
        result.push(value);
    }

    return [...result, ...first, ...second];
}
