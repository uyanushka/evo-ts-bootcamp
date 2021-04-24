import {ITreeNode} from "../src/types";
import {
    BFS,
    GetTreeColumn,
    InorderedDFS,
    PostorderedDFS,
    PreorderedDFS,
    TreeHasNodeWithValue
} from "../src/TreeAlgorithms";

const treeNode: ITreeNode<number> = {
    value: 8,
    left: {
        value: 12,
        left: {value: 7},
        right: {value: 36}
    },
    right: {
        value: 47,
        left: {value: 45}
    }
};

describe("TreeAlgorithms", () => {
    describe("TreeHasNodeWithValue", () => {
        test("finds the node with value", () => {
            expect(TreeHasNodeWithValue(45, treeNode)).toEqual(true);
        });

        test("returns false for unexisting value", () => {
            expect(TreeHasNodeWithValue(99, treeNode)).toEqual(false);
        });

        test("returns false for undefined treeNode", () => {
            expect(TreeHasNodeWithValue(5, undefined)).toEqual(false);
        });
    });

    describe("GetTreeColumn", () => {
        test("returns empty array for undefined treeNode", () => {
            expect(GetTreeColumn(undefined, 0)).toEqual([]);
        });

        test("returns empty array for unexisting column", () => {
            expect(GetTreeColumn(treeNode, 4)).toEqual([]);
        });

        test("returns correct array for left side columns", () => {
            expect(GetTreeColumn(treeNode, -2)).toEqual([7]);
        });

        test("returns correct array for central column", () => {
            expect(GetTreeColumn(treeNode, 0)).toEqual([8, 36, 45]);
        });

        test("returns correct array for right side columns", () => {
            expect(GetTreeColumn(treeNode, 1)).toEqual([47]);
        });
    });

    describe("InorderedDFS", () => {
        test("returns empty array for undefined treeNode", () => {
            expect(InorderedDFS(undefined)).toEqual([]);
        });

        test("returns correctly ordered array for a tree", () => {
            expect(InorderedDFS(treeNode)).toEqual([7, 12, 36, 8, 45, 47]);
        });
    });

    describe("PreorderedDFS", () => {
        test("returns empty array for undefined treeNode", () => {
            expect(PreorderedDFS(undefined)).toEqual([]);
        });

        test("returns correctly ordered array for a tree", () => {
            expect(PreorderedDFS(treeNode)).toEqual([8, 12, 7, 36, 47, 45]);
        });
    });

    describe("PostorderedDFS", () => {
        test("returns empty array for undefined treeNode", () => {
            expect(PostorderedDFS(undefined)).toEqual([]);
        });

        test("returns correctly ordered array for a tree", () => {
            expect(PostorderedDFS(treeNode)).toEqual([7, 36, 12, 45, 47, 8]);
        });
    });

    describe("BFS", () => {
        test("returns correctly ordered array for a tree", () => {
            expect(BFS(treeNode)).toEqual([8, 12, 47, 7, 36, 45]);
        });
    });
})
