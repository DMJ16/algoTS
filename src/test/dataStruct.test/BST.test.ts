import { BinarySearchTree } from "../../dataStruct";

describe("BinarySearchTree", () => {
  const BST: BinarySearchTree = new BinarySearchTree();
  test("insert node", () => {
    BST.insert(100);
    BST.insert(1);
    BST.insert(600);
    BST.insert(300);
    BST.insert(20);
    BST.insert(5);
  });

  test("validate BST", () => {
    expect(BST.validate()).toBe(true);
  });

  test("inclusive and in order sum of nodes in given range", () => {
    expect(BST.rangeSum(20, 100)).toBe(120);
    expect(BST.rangeSum(20, 600)).toBe(1020);
    expect(BST.rangeSum(1, 600)).toBe(1026);
  });

  test("insert node and find node by search", () => {
    expect(BST.search(100)).toBe(true);
    expect(BST.search(1)).toBe(true);
    expect(BST.search(600)).toBe(true);
    expect(BST.search(300)).toBe(true);
    expect(BST.search(20)).toBe(true);
    expect(BST.search(5)).toBe(true);
    expect(BST.search(500)).toBe(false);
    expect(BST.search(0)).toBe(false);
  });

  test("BFS traversal", () => {
    expect(BST.BFS()).toStrictEqual([100, 1, 600, 20, 300, 5]);
  });

  test("DFS PreOrder recursive and iterative traversal", () => {
    expect(BST.DFSPreOrd()).toStrictEqual([100, 1, 20, 5, 600, 300]);
    expect(BST.DFSPreOrdIter()).toStrictEqual([100, 1, 20, 5, 600, 300]);
  });

  test("DFS InOrder recursive and iterative traversal", () => {
    expect(BST.DFSInOrd()).toStrictEqual([1, 5, 20, 100, 300, 600]);
    expect(BST.DFSInOrdIter()).toStrictEqual([1, 5, 20, 100, 300, 600]);
  });

  test("DFS PostOrder recursive and iterative traversal", () => {
    expect(BST.DFSPostOrd()).toStrictEqual([5, 20, 1, 300, 600, 100]);
    expect(BST.DFSPostOrdIter()).toStrictEqual([5, 20, 1, 300, 600, 100]);
  });

  test("invert BST", () => {
    BST.invert();
    expect(BST.BFS()).toStrictEqual([100, 600, 1, 300, 20, 5]);
  });
});
