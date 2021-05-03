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
            case TraverseType.pre_dfs:
                return PreorderedDFS(this.tree);

            case TraverseType.in_dfs:
                return InorderedDFS(this.tree);

            case TraverseType.post_dfs:
                return PostorderedDFS(this.tree);

            case TraverseType.bfs:
                return BFS(this.tree);
        }
    }

    public getColumn(column: number): T[] {
        return GetTreeColumn(this.tree, column);
    }
}
