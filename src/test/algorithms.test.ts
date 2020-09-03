import {
  binarySearch,
  kmpSearch,
  kadanesAlgo,
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
} from "../algorithms";

describe("algorithms", () => {
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

    test("quickSort", () => {
      expect(quickSort([10, 5, 2, 3])).toStrictEqual([2, 3, 5, 10]);
      expect(quickSort([11, 7, 1, 14])).toStrictEqual([1, 7, 11, 14]);
      expect(quickSort([3, 1, 7, 11])).toStrictEqual([1, 3, 7, 11]);
      expect(quickSort([100, 200, 300, 400])).toStrictEqual([
        100,
        200,
        300,
        400,
      ]);
      expect(quickSort([-3, 4, 0, -2, 6, -1])).toStrictEqual([
        -3,
        -2,
        -1,
        0,
        4,
        6,
      ]);
      expect(quickSort([1, 4, 2, 10, 23, 3, 1, 0, 20])).toStrictEqual([
        0,
        1,
        1,
        2,
        3,
        4,
        10,
        20,
        23,
      ]);
      expect(quickSort([-3])).toStrictEqual([-3]);
    });

    test("mergeSort", () => {
      expect(mergeSort([10, 5, 2, 3])).toStrictEqual([2, 3, 5, 10]);
      expect(mergeSort([11, 7, 1, 14])).toStrictEqual([1, 7, 11, 14]);
      expect(mergeSort([3, 1, 7, 11])).toStrictEqual([1, 3, 7, 11]);
      expect(mergeSort([100, 200, 300, 400])).toStrictEqual([
        100,
        200,
        300,
        400,
      ]);
      expect(mergeSort([-3, 4, 0, -2, 6, -1])).toStrictEqual([
        -3,
        -2,
        -1,
        0,
        4,
        6,
      ]);
      expect(mergeSort([1, 4, 2, 10, 23, 3, 1, 0, 20])).toStrictEqual([
        0,
        1,
        1,
        2,
        3,
        4,
        10,
        20,
        23,
      ]);
      expect(mergeSort([-3])).toStrictEqual([-3]);
    });
  });

  describe("search algorithms", () => {
    test("kmpSearch returns frequency of substring occurence", () => {
      expect(kmpSearch("hannahhahhahahahhahahahannah", "hannah")).toBe(2);
      expect(kmpSearch("hannahhahhahahahhahahahannah", "dsds")).toBe(0);
      expect(kmpSearch("hannahhahhahahahhahahahannah", "ha")).toBe(9);
      expect(kmpSearch("hannahhahhahahah hahah     ahannah", "hannah")).toBe(2);
    });

    test("binarySearch returns index or -1 if search val not found", () => {
      expect(binarySearch([1, 2, 58, 99, 100], 100)).toBe(4);
      expect(binarySearch([1, 2, 5, 99, 10], 5)).toBe(2);
      expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13)).toBe(4);
      expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 1000)).toBe(-1);
      expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50)).toBe(-1);
    });
  });

  test("kadane's algorithm", () => {
    expect(
      kadanesAlgo([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
    ).toBe(19);

    expect(kadanesAlgo([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5])).toBe(-1);
  });
});
