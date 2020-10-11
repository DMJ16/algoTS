import { BST } from "../../dataStructures";

describe("BinarySearchTree", () => {
  const bst: BST = new BST();

  test("insert node", () => {
    bst.insert(100);
    bst.insert(1);
    bst.insert(600);
    bst.insert(300);
    bst.insert(20);
    bst.insert(5);
  });

  test("validate BST", () => {
    expect(bst.validate()).toBe(true);
  });

  test("inclusive and in order sum of nodes in given range", () => {
    expect(bst.rangeSum(20, 100)).toBe(120);
    expect(bst.rangeSum(20, 600)).toBe(1020);
    expect(bst.rangeSum(1, 600)).toBe(1026);
  });

  test("max sum of node path where each node has max 2 links", () => {
    expect(bst.maxPathSum()).toBe(1026);
  });

  test("insert node and find node by search", () => {
    expect(bst.search(100)).toBe(true);
    expect(bst.search(1)).toBe(true);
    expect(bst.search(600)).toBe(true);
    expect(bst.search(300)).toBe(true);
    expect(bst.search(20)).toBe(true);
    expect(bst.search(5)).toBe(true);
    expect(bst.search(500)).toBe(false);
    expect(bst.search(0)).toBe(false);
  });

  test("BFS traversal", () => {
    expect(bst.bfs()).toStrictEqual([100, 1, 600, 20, 300, 5]);
  });

  test("zigzagTraversal traversal", () => {
    expect(bst.zigzagTraversal()).toStrictEqual([100, 600, 1, 20, 300, 5]);
  });

  test("DFS PreOrder recursive and iterative traversal", () => {
    expect(bst.dfsPreOrder()).toStrictEqual([100, 1, 20, 5, 600, 300]);
    expect(bst.dfsPreOrderIter()).toStrictEqual([100, 1, 20, 5, 600, 300]);
  });

  test("DFS InOrder recursive and iterative traversal", () => {
    expect(bst.dfsInOrder()).toStrictEqual([1, 5, 20, 100, 300, 600]);
    expect(bst.dfsInOrderIter()).toStrictEqual([1, 5, 20, 100, 300, 600]);
  });

  test("DFS PostOrder recursive and iterative traversal", () => {
    expect(bst.dfsPostOrder()).toStrictEqual([5, 20, 1, 300, 600, 100]);
    expect(bst.dfsPostOrderIter()).toStrictEqual([5, 20, 1, 300, 600, 100]);
  });

  test("invert BST", () => {
    bst.invert();
    expect(bst.bfs()).toStrictEqual([100, 600, 1, 300, 20, 5]);
  });

  test("remove tree nodes", () => {
    bst.remove(100);
    expect(bst.root).toBeUndefined();
  });

  test("flatten tree", () => {
    bst.insert(100);
    bst.insert(1);
    bst.insert(600);
    bst.insert(300);
    bst.insert(20);
    bst.insert(5);
    bst.flatten();
    const left: number[] = [];
    const right: number[] = [];
    let currentNode = bst.root;
    while (currentNode) {
      if (currentNode.left) {
        left.push(currentNode.left.val);
      } else {
        right.push(currentNode.val);
      }
      if (currentNode.right) {
        right.push(currentNode.right.val);
      } else {
        left.push(currentNode.val);
      }
      currentNode = currentNode.right;
    }
    expect(left).toEqual(right);
  });
});
