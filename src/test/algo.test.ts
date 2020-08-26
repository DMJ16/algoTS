import { binarySearch, kmpSearch } from "../algorithms/search";

import {
  bubbleSort,
  insertionSort,
  selectionSort,
} from "../algorithms/sorting";

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
