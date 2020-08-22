import { BST, Graph, Stack, LinkedList } from "../dataStruct";
import {
  fib,
  factorial,
  isPalindrome,
  caesarCipherEncryptor,
  memoize,
  flatten,
  reduce,
} from "../general";
import { binarySearch, kmpSearch } from "../algorithms/search";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
} from "../algorithms/sorting";

describe("general computer science and interview problems", () => {
  test("palindromes return true, else false", () => {
    expect(isPalindrome("hannah")).toStrictEqual(true);
    expect(isPalindrome("racecar")).toStrictEqual(true);
    expect(isPalindrome("david")).toStrictEqual(false);
  });

  test("characters shift k positions in alphabet", () => {
    expect(caesarCipherEncryptor("a", 2)).toStrictEqual("c");
    expect(caesarCipherEncryptor("abc", 3)).toStrictEqual("def");
    expect(caesarCipherEncryptor("a", 4)).toStrictEqual("e");
    expect(caesarCipherEncryptor("z", 4)).toStrictEqual("d");
    expect(caesarCipherEncryptor("z", 1)).toStrictEqual("a");
    expect(caesarCipherEncryptor("xyz", 2)).toStrictEqual("zab");
  });

  test("flatten", () => {
    const arr = [[[[[[55], 33], 28]]]];
    expect(flatten(arr)).toStrictEqual([55, 33, 28]);
  });

  function add(a: number, b: number): number {
    console.log("test");
    return a + b;
  }
  test("memoize", () => {
    const memAdd = memoize(add);
    expect(memAdd(2, 3)).toStrictEqual(5);
    expect(memAdd(2, 3)).toStrictEqual(5);
  });

  test("reduce", () => {
    expect(reduce.bind([1, 2, 3, 4], add)()).toBe(10);
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
    test("kmpSearch", () => {
      expect(kmpSearch("hannahhahhahahahhahahahannah", "hannah")).toStrictEqual(
        2
      );
      expect(kmpSearch("hannahhahhahahahhahahahannah", "dsds")).toStrictEqual(
        0
      );
      expect(kmpSearch("hannahhahhahahahhahahahannah", "ha")).toStrictEqual(9);
      expect(
        kmpSearch("hannahhahhahahah hahah     ahannah", "hannah")
      ).toStrictEqual(2);
    });
  });

  test("binarySearch returns index or -1 if search val not found", () => {
    expect(binarySearch([1, 2, 58, 99, 100], 100)).toStrictEqual(4);
    expect(binarySearch([1, 2, 5, 99, 10], 5)).toStrictEqual(2);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13)).toStrictEqual(4);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 1000)).toStrictEqual(-1);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50)).toStrictEqual(-1);
  });
});

describe("dataStructures", () => {
  test("stack", () => {
    const stack = new Stack();
    expect(stack.pop()).toStrictEqual(undefined);
    expect(stack.push(10)).toStrictEqual(1);
    expect(stack.push(100)).toStrictEqual(2);
    expect(stack.push(1)).toStrictEqual(3);
    expect(stack.push(5)).toStrictEqual(4);
    expect(stack.pop()).toStrictEqual(5);
    expect(stack.pop()).toStrictEqual(1);
  });

  test("binary search tree", () => {
    const tree = new BST();
    tree.insert(50);
    tree.insert(20);
    tree.insert(500);
    tree.insert(10);
    tree.insert(30);
    tree.invert();
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
    expect(graph.Dijkstra("A", "E")).toStrictEqual(["A", "C", "D", "F", "E"]);
  });
});
