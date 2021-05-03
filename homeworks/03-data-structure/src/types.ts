import {TraverseType} from "./consts";

export interface IBinaryTree<T> {
    setTree(tree: ITreeNode<T>): this;

    traverse(traverseType: TraverseType): T[];

    getColumn(columnOrder: number): T[];
}

export interface IBinarySearchTree<T> extends IBinaryTree<T> {
    has(value: T): boolean;
}

export interface ITreeNode<T> {
    value: T;

    left?: ITreeNode<T>;

    right?: ITreeNode<T>;
}
