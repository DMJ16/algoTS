import { BST } from "../../../fp";

const { Tree, ...fn } = BST;

describe("BinarySearchTree", () => {
  const tree: BST.Tree = new Tree(100);

  test("generateBST", () => {
    expect(
      fn.generateBST(tree, [1, 600, 300]) instanceof BST.Tree
    ).toBeTruthy();
  });

  test("insert node", () => {
    fn.insert(20, tree);
    fn.insert(5, tree);
  });

  test("validate BST", () => {
    expect(fn.validate(tree)).toBe(true);
  });

  test("maxDepth", () => {
    expect(fn.maxDepth(tree)).toBe(4);
  });

  test("inclusive and in order sum of nodes in given range", () => {
    expect(fn.rangeSum(tree, 20, 100)).toBe(120);
    expect(fn.rangeSum(tree, 20, 600)).toBe(1020);
    expect(fn.rangeSum(tree, 1, 600)).toBe(1026);
  });

  test("insert node and find node by search", () => {
    expect(fn.search(100, tree)).toBe(true);
    expect(fn.search(1, tree)).toBe(true);
    expect(fn.search(600, tree)).toBe(true);
    expect(fn.search(300, tree)).toBe(true);
    expect(fn.search(20, tree)).toBe(true);
    expect(fn.search(5, tree)).toBe(true);
    expect(fn.search(500, tree)).toBe(false);
    expect(fn.search(0, tree)).toBe(false);
  });

  test("BFS traversal", () => {
    expect(fn.BFS(tree)).toStrictEqual([100, 1, 600, 20, 300, 5]);
  });

  test("DFS PreOrder recursive traversal", () => {
    expect(fn.DFSPreOrder(tree)).toStrictEqual([100, 1, 20, 5, 600, 300]);
  });

  test("DFS InOrder recursive traversal", () => {
    expect(fn.DFSInOrder(tree)).toStrictEqual([1, 5, 20, 100, 300, 600]);
  });

  test("DFS PostOrder recursive traversal", () => {
    expect(fn.DFSPostOrder(tree)).toStrictEqual([5, 20, 1, 300, 600, 100]);
  });

  test("invert fn", () => {
    fn.invert(tree);
    expect(fn.BFS(tree)).toStrictEqual([100, 600, 1, 300, 20, 5]);
  });
});
