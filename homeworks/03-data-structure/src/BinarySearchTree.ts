import {BinaryTree} from "./BinaryTree";
import {IBinarySearchTree} from "./types";
import {TreeHasNodeWithValue} from "./TreeAlgorithms";

export class BinarySearchTree<T> extends BinaryTree<T> implements IBinarySearchTree<T> {
    public has(value: T): boolean {
        return TreeHasNodeWithValue(value, this.tree);
    }
}
