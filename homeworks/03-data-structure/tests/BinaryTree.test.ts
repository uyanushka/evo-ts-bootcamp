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

    test("traverse with param 'BFS' calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.traverse(TraverseType.BFS);
        expect(BFS).toHaveBeenCalledTimes(1);
    });

    test("traverse with param 'POST_DFS' calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.traverse(TraverseType.POST_DFS);
        expect(PostorderedDFS).toHaveBeenCalledTimes(1);
    });

    test("traverse with param 'PRE_DFS' calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.traverse(TraverseType.PRE_DFS);
        expect(PreorderedDFS).toHaveBeenCalledTimes(1);
    });

    test("traverse with param 'IN_DFS' calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.traverse(TraverseType.IN_DFS);
        expect(InorderedDFS).toHaveBeenCalledTimes(1);
    });

    test("getColumn calls correct algorithm", () => {
        const tree = new BinaryTree({value: 5});
        tree.getColumn(1);
        expect(GetTreeColumn).toHaveBeenCalledTimes(1);
    });
})
