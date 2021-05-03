import {ITreeNode} from "./types";
import {CompareNodeValues} from "./helpers/Comparator";

export function InorderedDFS<T>(node?: ITreeNode<T>): T[] {
    return (node) ? [...InorderedDFS(node.left), node.value, ...InorderedDFS(node.right)] : [];
}

export function PreorderedDFS<T>(node?: ITreeNode<T>): T[] {
    return (node) ? [node.value, ...PreorderedDFS(node.left), ...PreorderedDFS(node.right)] : [];
}

export function PostorderedDFS<T>(node?: ITreeNode<T>): T[] {
    return (node) ? [...PostorderedDFS(node.left), ...PostorderedDFS(node.right), node.value] : [];
}

export function BFS<T>(node: ITreeNode<T>): T[] {
    const result: T[] = [];

    const queue: ITreeNode<T>[] = [node];

    while (true) {
        const currentNode = queue.shift();
        if (!currentNode) break;

        result.push(currentNode.value);

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
}

export function GetTreeColumn<T>(node: ITreeNode<T> | undefined, expectedColumn: number, currentColumn: number = 0): T[] {
    if (!node) return [];

    const result: T[] = [];

    if (currentColumn === expectedColumn) result.push(node.value);

    result.push(...GetTreeColumn(node.left, expectedColumn, currentColumn - 1));
    result.push(...GetTreeColumn(node.right, expectedColumn, currentColumn + 1));

    return result;
}

export function TreeHasNodeWithValue<T>(value: T, node?: ITreeNode<T>): boolean {
    if (!node) return false;

    const compare = CompareNodeValues(value, node.value);

    return (compare === 0) ? true
         : (compare === 1) ? TreeHasNodeWithValue(value, node.right)
         : TreeHasNodeWithValue(value, node.left);
}
