import {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
} from "../sorting";

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
    expect(quickSort([100, 200, 300, 400])).toStrictEqual([100, 200, 300, 400]);
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
    expect(mergeSort([100, 200, 300, 400])).toStrictEqual([100, 200, 300, 400]);
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
