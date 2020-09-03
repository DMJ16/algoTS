import {
  BinarySearchTree,
  Graph,
  Stack,
  LinkedList,
  DoublyLinkedList,
  Queue,
  MaxBinaryHeap,
  PriorityQueue,
} from "../dataStruct";

describe("Stack", () => {
  const stack: Stack<number> = new Stack<number>();

  test("pop empty stack returns null", () => {
    expect(stack.pop()).toBeUndefined();
  });

  test("push node", () => {
    expect(stack.push(10)).toBe(1);
    expect(stack.push(100)).toBe(2);
    expect(stack.push(1)).toBe(3);
    expect(stack.push(5)).toBe(4);
    expect(stack.first?.val).toBe(5);
    expect(stack.last?.val).toBe(10);
  });

  test("pop node", () => {
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(1);
  });
});

describe("Queue", () => {
  const queue: Queue<number> = new Queue<number>();
  test("dequeue empty queue returns null", () => {
    expect(queue.dequeue()).toBeFalsy();
  });

  test("enqueue node", () => {
    expect(queue.enqueue(5)).toBe(1);
    expect(queue.enqueue(3)).toBe(2);
    expect(queue.enqueue(1)).toBe(3);
  });

  test("dequeue node", () => {
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(1);
  });
});

describe("LinkedList", () => {
  const list: LinkedList<number> = new LinkedList<number>();
  test("push, insert and get new nodes", () => {
    list.push(6);
    list.push(36);
    list.insert(2, 30);
    list.push(100);
    expect(list.len).toBe(4);
    expect(list.head?.val).toBe(6);
    expect(list.tail?.val).toBe(100);
    expect(list.get(1)?.val).toBe(36);
    expect(list.get(2)?.val).toBe(30);
  });

  test("set node", () => {
    expect(list.set(3, 101)).toBe(true);
    expect(list.tail?.val).toBe(101);
    expect(list.set(3, 100)).toBe(true);
    expect(list.tail?.val).toBe(100);
  });

  test("remove and pop nodes", () => {
    const removedNode = list.remove(1);
    expect(removedNode?.val).toBe(36);
    expect(removedNode?.next).toBeUndefined();
    const poppedNode = list.pop();
    expect(poppedNode?.val).toBe(100);
    expect(list.len).toBe(2);
    list.push(100);
  });

  test("shift and unshift nodes", () => {
    list.unshift(50000);
    list.shift();
    expect(list.len).toBe(3);
    expect(list.head?.val).toBe(6);
    list.unshift(50000);
    expect(list.len).toBe(4);
    expect(list.head?.val).toBe(50000);
  });

  test("reverse list and shift nodes", () => {
    list.reverse();
    expect(list.shift()?.val).toBe(100);
    expect(list.shift()?.val).toBe(30);
    expect(list.shift()?.val).toBe(6);
    expect(list.shift()?.val).toBe(50000);
  });
});

describe("DoublyLinkedList", () => {
  const list: DoublyLinkedList<number> = new DoublyLinkedList<number>();
  test("push, insert and get new nodes", () => {
    list.push(6);
    list.push(36);
    list.insert(2, 30);
    list.push(100);
    expect(list.length).toBe(4);
    expect(list.head?.val).toBe(6);
    expect(list.tail?.val).toBe(100);
    expect(list.get(1)?.val).toBe(36);
    expect(list.get(3)?.val).toBe(100);
  });

  test("set node", () => {
    expect(list.set(3, 101)).toBe(true);
    expect(list.tail?.val).toBe(101);
    expect(list.set(3, 100)).toBe(true);
    expect(list.tail?.val).toBe(100);
  });

  test("remove and pop nodes", () => {
    const removedNode = list.remove(1);
    expect(removedNode?.val).toBe(36);
    expect(removedNode?.next).toBeUndefined();
    const poppedNode = list.pop();
    expect(poppedNode?.val).toBe(100);
    expect(list.length).toBe(2);
    list.push(100);
  });

  test("shift and unshift nodes", () => {
    list.unshift(50000);
    list.shift();
    expect(list.length).toBe(3);
    expect(list.head?.val).toBe(6);
    list.unshift(50000);
    expect(list.length).toBe(4);
    expect(list.head?.val).toBe(50000);
  });

  test("reverse list and shift nodes", () => {
    list.reverse();
    expect(list.shift()?.val).toBe(100);
    expect(list.shift()?.val).toBe(30);
    expect(list.shift()?.val).toBe(6);
    expect(list.shift()?.val).toBe(50000);
  });
});

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

describe("MaxBinaryHeap", () => {
  const heap: MaxBinaryHeap = new MaxBinaryHeap();
  test("insert nodes into heap", () => {
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
  });

  test("extract max value from heap", () => {
    expect(heap.extractMax()).toBe(55);
    expect(heap.values).toStrictEqual([41, 39, 33, 18, 27, 12, 1]);
  });
});

describe("PriorityQueue", () => {
  const PQ: PriorityQueue<string> = new PriorityQueue<string>();
  test("enqueue nodes", () => {
    PQ.enqueue("entree", 3);
    expect(PQ.values.length).toBe(1);
    PQ.enqueue("appetizer", 4);
    expect(PQ.values.length).toBe(2);
    PQ.enqueue("dessert", 5);
    expect(PQ.values.length).toBe(3);
    PQ.enqueue("drink", 2);
    expect(PQ.values.length).toBe(4);
    PQ.enqueue("special", 1);
    expect(PQ.values.length).toBe(5);
  });

  test("dequeue nodes", () => {
    const dequeue = PQ.dequeue();
    expect(dequeue.val).toBe("special");
    expect(dequeue.priority).toBe(1);
  });
});

describe("Graph", () => {
  const graph: Graph<string> = new Graph();

  test("add vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");
    expect(Object.keys(graph.adjList).length).toBe(6);
  });

  test("add edges", () => {
    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    graph.addEdge("C", "F", 4);
    graph.addEdge("D", "E", 3);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "F", 1);
    expect(graph.adjList["A"].length).toBe(2);
    expect(graph.adjList["B"].length).toBe(2);
    expect(graph.adjList["E"].length).toBe(3);
    expect(graph.adjList["C"].length).toBe(3);
    expect(graph.adjList["D"].length).toBe(3);
    expect(graph.adjList["F"].length).toBe(3);
  });

  test("DFS recursive and iterative traversal", () => {
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
  });

  test("BFS traversal", () => {
    expect(graph.BFS("A")).toStrictEqual(["A", "B", "C", "E", "D", "F"]);
  });

  test("Dijkstra's Algorithm", () => {
    expect(graph.Dijkstra("A", "E")).toStrictEqual(["A", "C", "D", "F", "E"]);
  });

  test("remove edges", () => {
    graph.removeEdge("A", "B");
    graph.removeEdge("A", "C");
    graph.removeEdge("B", "E");
    graph.removeEdge("C", "D");
    graph.removeEdge("C", "F");
    graph.removeEdge("D", "E");
    graph.removeEdge("D", "F");
    graph.removeEdge("E", "F");
    expect(graph.adjList["A"].length).toBe(0);
    expect(graph.adjList["B"].length).toBe(0);
    expect(graph.adjList["E"].length).toBe(0);
    expect(graph.adjList["C"].length).toBe(0);
    expect(graph.adjList["D"].length).toBe(0);
    expect(graph.adjList["F"].length).toBe(0);
  });

  test("remove vertices and edges", () => {
    graph.removeVertex("A");
    graph.removeVertex("B");
    graph.removeVertex("C");
    graph.removeVertex("D");
    graph.removeVertex("E");
    graph.removeVertex("F");
    expect(Object.keys(graph.adjList).length).toBe(0);
    expect(graph.adjList["A"]).toBeUndefined();
    expect(graph.adjList["B"]).toBeUndefined();
    expect(graph.adjList["E"]).toBeUndefined();
    expect(graph.adjList["C"]).toBeUndefined();
    expect(graph.adjList["D"]).toBeUndefined();
    expect(graph.adjList["F"]).toBeUndefined();
  });
});
