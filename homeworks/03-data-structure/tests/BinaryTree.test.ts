import {BinaryTree} from "../src/BinaryTree";
import {ITreeNode} from "../src/types";
import {TraverseType} from "../src/consts";
import {BFS, GetTreeColumn, InorderedDFS, PostorderedDFS, PreorderedDFS} from "../src/TreeAlgorithms";

jest.mock("../src/TreeAlgorithms");

describe("BinaryTree", () => {
    test("setTree updates tree content", () => {
        const initialTreeNode: ITreeNode<number> = {
            value: 5,
            left: {
                value: 3,
            }
        };

        const tree = new BinaryTree(initialTreeNode);

        const replacementTreeNode: ITreeNode<number> = {
            value: 2
        }

        tree.setTree(replacementTreeNode);

        expect(tree.getTree()).toEqual(replacementTreeNode);
    });

    test("traverse with param 'bfs' calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.traverse(TraverseType.bfs);
        expect(BFS).toHaveBeenCalledTimes(1);
    });

    test("traverse with param 'post_dfs' calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.traverse(TraverseType.post_dfs);
        expect(PostorderedDFS).toHaveBeenCalledTimes(1);
    });

    test("traverse with param 'pre_dfs' calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.traverse(TraverseType.pre_dfs);
        expect(PreorderedDFS).toHaveBeenCalledTimes(1);
    });

    test("traverse with param 'in_dfs' calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.traverse(TraverseType.in_dfs);
        expect(InorderedDFS).toHaveBeenCalledTimes(1);
    });

    test("getColumn calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.getColumn(1);
        expect(GetTreeColumn).toHaveBeenCalledTimes(1);
    });
})
