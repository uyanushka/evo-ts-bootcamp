import {TreeHasNodeWithValue} from "../src/TreeAlgorithms";
import {BinarySearchTree} from "../src/BinarySearchTree";

jest.mock("../src/TreeAlgorithms");

describe("BinarySearchTree", () => {
    test("has with param calls correct algorithm", () => {
        const tree = new BinarySearchTree({value: 5});
        tree.has(2);
        expect(TreeHasNodeWithValue).toHaveBeenCalledTimes(1);
    });
})
