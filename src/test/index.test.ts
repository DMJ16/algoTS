import {
  BST,
  Graph,
  Stack,
  LinkedList,
  Queue,
  MaxBinaryHeap,
  PriorityQueue,
} from "../dataStruct";
import {
  fib,
  factorial,
  isPalindrome,
  caesarCipherEncryptor,
  memoize,
  flatten,
  reduce,
  findThreeLargestNumbers,
  threeNumSum,
} from "../general";
import { binarySearch, kmpSearch } from "../algorithms/search";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
} from "../algorithms/sorting";

describe("general computer science and interview problems", () => {
  test("fibonacci function", () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
  });

  test("factorial function", () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
  });

  test("palindromes return true, else false", () => {
    expect(isPalindrome("hannah")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("david")).toBe(false);
  });

  test("characters shift k positions in alphabet", () => {
    expect(caesarCipherEncryptor("a", 2)).toBe("c");
    expect(caesarCipherEncryptor("abc", 3)).toBe("def");
    expect(caesarCipherEncryptor("a", 4)).toBe("e");
    expect(caesarCipherEncryptor("z", 4)).toBe("d");
    expect(caesarCipherEncryptor("z", 1)).toBe("a");
    expect(caesarCipherEncryptor("xyz", 2)).toBe("zab");
  });

  test("flatten nest arrays", () => {
    const arr = [[[[[[55], 33], 28]]]];
    expect(flatten(arr)).toStrictEqual([55, 33, 28]);
  });

  function add(a: number, b: number): number {
    return a + b;
  }
  test("memoize a function", () => {
    const memAdd = memoize(add);
    expect(memAdd(2, 3)).toBe(5);
    expect(memAdd(2, 3)).toBe(5);
  });

  test("reduce an array", () => {
    expect(reduce.bind([1, 2, 3, 4], add)()).toBe(10);
  });

  test("return three largest numbers of an array", () => {
    expect(
      findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
    ).toStrictEqual([18, 141, 541]);

    expect(findThreeLargestNumbers([55, 43, 11, 3, -3, 10])).toStrictEqual([
      11,
      43,
      55,
    ]);

    expect(
      findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7])
    ).toStrictEqual([7, 7, 8]);
  });

  test("returns array of triplets that sum to a given target", () => {
    expect(threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toStrictEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
  });
});

describe("sorting algorithms", () => {
  test("bubbleSort", () => {
    expect(bubbleSort([8, 5, 2, 9, 5, 6, 3])).toStrictEqual([
      2,
      3,
      5,
      5,
      6,
      8,
      9,
    ]);
  });

  test("insertSort", () => {
    expect(insertionSort([8, 5, 2, 9, 5, 6, 3])).toStrictEqual([
      2,
      3,
      5,
      5,
      6,
      8,
      9,
    ]);
  });

  test("selectionSort", () => {
    expect(selectionSort([8, 5, 2, 9, 5, 6, 3])).toStrictEqual([
      2,
      3,
      5,
      5,
      6,
      8,
      9,
    ]);
  });

  describe("search algorithms", () => {
    test("kmpSearch returns frequency of substring occurence", () => {
      expect(kmpSearch("hannahhahhahahahhahahahannah", "hannah")).toBe(2);
      expect(kmpSearch("hannahhahhahahahhahahahannah", "dsds")).toBe(0);
      expect(kmpSearch("hannahhahhahahahhahahahannah", "ha")).toBe(9);
      expect(kmpSearch("hannahhahhahahah hahah     ahannah", "hannah")).toBe(2);
    });
  });

  test("binarySearch returns index or -1 if search val not found", () => {
    expect(binarySearch([1, 2, 58, 99, 100], 100)).toBe(4);
    expect(binarySearch([1, 2, 5, 99, 10], 5)).toBe(2);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13)).toBe(4);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 1000)).toBe(-1);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50)).toBe(-1);
  });
});

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
