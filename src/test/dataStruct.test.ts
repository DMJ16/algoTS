import {
  BST,
  Graph,
  Stack,
  LinkedList,
  Queue,
  MaxBinaryHeap,
  PriorityQueue,
} from "../dataStruct";

describe("dataStructures", () => {
  test("stack", () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(undefined);
    expect(stack.push(10)).toBe(1);
    expect(stack.push(100)).toBe(2);
    expect(stack.push(1)).toBe(3);
    expect(stack.push(5)).toBe(4);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(1);
  });

  test("queue", () => {
    const queue = new Queue();
    expect(queue.enqueue(5)).toBe(1);
    expect(queue.enqueue(3)).toBe(2);
    expect(queue.enqueue(1)).toBe(3);
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(1);
  });

  test("linked list", () => {
    const list = new LinkedList<number>();
    list.push(6);
    expect(list.len).toBe(1);
    expect(list.head?.val).toBe(6);
    expect(list.tail?.val).toBe(6);
    list.push(36);
    expect(list.len).toBe(2);
    expect(list.head?.val).toBe(6);
    expect(list.tail?.val).toBe(36);
    list.push(100);
    expect(list.len).toBe(3);
    expect(list.head?.val).toBe(6);
    expect(list.tail?.val).toBe(100);
    const removedNode = list.remove(1);
    expect(removedNode?.val).toBe(36);
    expect(removedNode?.next).toBe(undefined);
    expect(list.len).toBe(2);
    list.unshift(50000);
    expect(list.len).toBe(3);
    expect(list.head?.val).toBe(50000);
    list.reverse();
    expect(list.shift()?.val).toBe(100);
    expect(list.shift()?.val).toBe(6);
    expect(list.shift()?.val).toBe(50000);
  });

  test("binary search tree", () => {
    const tree = new BST();
    tree.insert(50);
    tree.insert(20);
    tree.insert(500);
    tree.insert(10);
    tree.insert(30);
    expect(tree.validate()).toBe(true);
    expect(tree.rangeSum(10, 30)).toBe(60);
    expect(tree.rangeSum(10, 500)).toBe(610);

    tree.invert();
    expect(tree.BFS()).toStrictEqual([50, 500, 20, 30, 10]);
    expect(tree.DFSPreOrd()).toStrictEqual([50, 500, 20, 30, 10]);
    expect(tree.DFSInOrd()).toStrictEqual([500, 50, 30, 20, 10]);
    expect(tree.DFSPostOrd()).toStrictEqual([500, 30, 10, 20, 50]);
  });

  test("max binary heap", () => {
    const heap = new MaxBinaryHeap();
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    heap.insert(1);
    expect(heap.values.length).toBe(8);
    expect(heap.values).toStrictEqual([55, 39, 41, 18, 27, 12, 33, 1]);
    expect(heap.extractMax()).toBe(55);
    expect(heap.values).toStrictEqual([41, 39, 33, 18, 27, 12, 1]);
  });

  test("priority queue", () => {
    const ER = new PriorityQueue();
    ER.enqueue("common cold", 5);
    expect(ER.values.length).toBe(1);
    ER.enqueue("gunshot", 1);
    expect(ER.values.length).toBe(2);
    ER.enqueue("high fever", 2);
    expect(ER.values.length).toBe(3);
    ER.enqueue("hurt leg", 1.5);
    expect(ER.values.length).toBe(4);
    ER.enqueue("pregnant", 0.5);
    expect(ER.values.length).toBe(5);
    const dequeue = ER.dequeue();
    expect(dequeue.val).toBe("pregnant");
    expect(dequeue.priority).toBe(0.5);
  });

  test("graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");
    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    graph.addEdge("C", "F", 4);
    graph.addEdge("D", "E", 3);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "F", 1);

    expect(graph.DFSIterative("A")).toStrictEqual([
      "A",
      "C",
      "F",
      "E",
      "D",
      "B",
    ]);
    expect(graph.DFSRecursive("A")).toStrictEqual([
      "A",
      "B",
      "E",
      "D",
      "C",
      "F",
    ]);
    expect(graph.BFS("A")).toStrictEqual(["A", "B", "C", "E", "D", "F"]);
    expect(graph.Dijkstra("A", "E")).toStrictEqual(["A", "C", "D", "F", "E"]);
  });
});
