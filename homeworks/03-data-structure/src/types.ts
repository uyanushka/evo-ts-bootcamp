import {TraverseType} from "./consts";

export interface IBinaryTree<T> {
    constructor(tree: ITreeNode<T>): void;

    setTree(tree: ITreeNode<T>): this;

    traverse(traverseType: TraverseType): ITreeNodeValue<T>[];

    getColumn(columnOrder: number): ITreeNodeValue<T>[];
}

export interface IBinarySearchTree<T> extends IBinaryTree<T> {
    has(value: number): boolean;
}

export interface ITreeNode<T> {
    value: ITreeNodeValue<T>;

    left?: ITreeNode<T>;

    right?: ITreeNode<T>;
}

export interface ITreeNodeValue<T> {
    value: T;
}
