import {IBinaryTree, ITreeNode} from "./types";
import {TraverseType} from "./consts";
import {BFS, GetTreeColumn, InorderedDFS, PostorderedDFS, PreorderedDFS} from "./TreeAlgorithms";

export class BinaryTree<T> implements IBinaryTree<T> {
    protected tree: ITreeNode<T>;

    constructor(tree: ITreeNode<T>) {
        this.tree = tree;
    }

    public setTree(node: ITreeNode<T>): this {
        this.tree = node;
        return this;
    }

    public getTree(): ITreeNode<T> {
        return this.tree;
    }

    public traverse(traverseType: TraverseType): T[] {
        switch (traverseType) {
            case TraverseType.PRE_DFS:
                return PreorderedDFS(this.tree);

            case TraverseType.IN_DFS:
                return InorderedDFS(this.tree);

            case TraverseType.POST_DFS:
                return PostorderedDFS(this.tree);

            case TraverseType.BFS:
                return BFS(this.tree);
        }
    }

    public getColumn(column: number): T[] {
        return GetTreeColumn(this.tree, column);
    }
}
