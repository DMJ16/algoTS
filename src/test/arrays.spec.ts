import {
  flatten,
  reduce,
  findThreeLargestNumbers,
  threeNumSum,
  smallestDifference,
  moveElementToEnd,
  isMonotonic,
  spiralTraversal,
  longestPeak,
  getPermutationIter,
  getPermutationRecursive,
  powerset,
  wordSearch,
  kDiffPairs,
  mergeTwoSortedArrays,
  zigzagTraverse,
  sameBST,
  riverSizes,
  minSubarrayLen,
  removeDuplicates,
  maxProfitOneTxn,
  maxProfitMultiTxn,
  maxProfitTwoTxn,
  maxProfitKTxn,
  rotateArr,
  rotateArrIter,
  rotateMatrix,
  containsDuplicateObj,
  containsDuplicateSet,
  containsDuplicateMap,
  singleNumberMap,
  singleNumberObj,
  singleNumberBitwise,
  intersect,
  digitPlusOne,
  twoSum,
  mapProductExcludeCurrIdx,
  threeNumMaxProduct,
  threeNumMaxProductNoSort,
  productSum,
  moveZeroes,
  moveZeroesIter,
  nextGreatestLetter,
  diagonalSum,
  diagSum,
  runningSum,
  runningSumMut,
  isArithmeticProgression,
  thirdMax,
  countNegatives,
  maxTwoNumProduct,
  isValidSudoku,
  kthLargestElementInArr,
  topKFrequentElements,
} from "../arrays";

describe("array algorithms", () => {
  test("flatten nested arrays", () => {
    const arr = [[[[[[55], 33], 28]]]];
    expect(flatten(arr)).toStrictEqual([55, 33, 28]);
  });

  test("reduce an array", () => {
    function add(a: number, b: number): number {
      return a + b;
    }
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

  test("return array of triplets that sum to a given target", () => {
    expect(threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toStrictEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
  });

  test("return smallest difference between two input arrays", () => {
    expect(
      smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
    ).toStrictEqual([28, 26]);

    expect(
      smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])
    ).toStrictEqual([20, 17]);
  });

  test("return array with value to move moved to the end", () => {
    expect(moveElementToEnd([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 5, 4, 3]);
    expect(
      moveElementToEnd(
        [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5],
        5
      )
    ).toStrictEqual([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5]);
    expect(
      moveElementToEnd(
        [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
        5
      )
    ).toStrictEqual([12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 6, 5, 5, 5, 5, 5, 5]);
  });

  test("return true if input array is monotonic", () => {
    expect(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])).toBe(
      true
    );
    expect(isMonotonic([])).toBe(true);
    expect(isMonotonic([1])).toBe(true);
    expect(isMonotonic([-1])).toBe(true);
    expect(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001])).toBe(
      false
    );
    expect(
      isMonotonic([
        -1,
        -1,
        -2,
        -3,
        -4,
        -5,
        -5,
        -5,
        -6,
        -7,
        -8,
        -7,
        -9,
        -10,
        -11,
      ])
    ).toBe(false);
  });

  test("spiral traversal", () => {
    expect(
      spiralTraversal([
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ])
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

    expect(
      spiralTraversal([
        [1, 2, 3],
        [12, 13, 4],
        [11, 14, 5],
        [10, 15, 6],
        [9, 8, 7],
      ])
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  test("find longest peak in array", () => {
    expect(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])).toBe(6);
    expect(longestPeak([5, 4, 3, 2, 1, 2, 1])).toBe(3);
  });

  test("return all permutations of input number array", () => {
    expect(getPermutationIter([1, 2, 3])).toEqual([
      [1, 2, 3],
      [2, 1, 3],
      [3, 1, 2],
      [1, 3, 2],
      [2, 3, 1],
      [3, 2, 1],
    ]);
    expect(getPermutationRecursive([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  test("return powerset of input array", () => {
    expect(powerset([1, 2, 3])).toStrictEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
    expect(powerset([1, 2, 3, 4])).toStrictEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
      [4],
      [1, 4],
      [2, 4],
      [1, 2, 4],
      [3, 4],
      [1, 3, 4],
      [2, 3, 4],
      [1, 2, 3, 4],
    ]);
  });

  test("wordSearch", () => {
    expect(
      wordSearch(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCCED"
      )
    ).toBeTruthy();
    expect(
      wordSearch(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "SEE"
      )
    ).toBeTruthy();
    expect(
      wordSearch(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCB"
      )
    ).toBeFalsy();
  });

  test("return n-pairs that have kth difference", () => {
    expect(kDiffPairs([3, 1, 4, 1, 5], 2)).toBe(2);
    expect(kDiffPairs([1, 2, 3, 4, 5], 1)).toBe(4);
    expect(kDiffPairs([1, 3, 1, 5, 4], 0)).toBe(1);
  });

  test("merge two sorted arrays in place", () => {
    const result: number[] = [1, 2, 3, 0, 0, 0];
    mergeTwoSortedArrays(result, 3, [2, 5, 6], 3);
    expect(result).toStrictEqual([1, 2, 2, 3, 5, 6]);
  });

  test("zig zag traverse nxm matrix", () => {
    expect(
      zigzagTraverse([
        [1, 3, 4, 10],
        [2, 5, 9, 11],
        [6, 8, 12, 15],
        [7, 13, 14, 16],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  test("return true if input arrays are the same binary search tree", () => {
    expect(
      sameBST(
        [10, 15, 8, 12, 94, 81, 5, 2, 11],
        [10, 8, 5, 15, 2, 12, 11, 94, 81]
      )
    ).toBe(true);
    expect(
      sameBST(
        [10, 15, 8, 12, 94, 81, 5, 2, 11],
        [10, 8, 5, 14, 2, 12, 11, 94, 81]
      )
    ).toBe(false);
  });

  test("riverSizes", () => {
    expect(
      riverSizes([
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0],
      ])
    ).toStrictEqual([2, 1, 5, 2, 2]);

    expect(
      riverSizes([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ])
    ).toStrictEqual([]);
  });

  test("minSubarrayLen", () => {
    expect(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    expect(minSubarrayLen([0], 7)).toBe(0);
    expect(minSubarrayLen([], 7)).toBe(0);
  });

  describe("rotate", () => {
    test("rotateArr rotates input arr in-place to the right by k steps--where k is >= 0", () => {
      const arr1 = [1, 2, 3, 4, 5, 6, 7];
      rotateArr(arr1, 3);
      rotateArr(arr1, 0); // test that when k is 0 the arr is not modified
      expect(arr1).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);
      const arr2 = [-1, -100, 3, 99];
      rotateArrIter(arr2, 2);
      rotateArrIter(arr2, 0); // test that when k is 0 the arr is not modified
      expect(arr2).toStrictEqual([3, 99, -1, -100]);
    });

    test("rotateMatrix rotates n x n 2D input matrix in-place by 90 degrees", () => {
      [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        [
          [5, 1, 9, 11],
          [2, 4, 8, 10],
          [13, 3, 6, 7],
          [15, 14, 12, 16],
        ],
        [
          [1, 2],
          [3, 4],
        ],
        [[1]],
        [[]],
      ].forEach((input, i) => {
        rotateMatrix(input);
        if (i === 0)
          expect(input).toStrictEqual([
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
          ]);
        else if (i === 1)
          expect(input).toStrictEqual([
            [15, 13, 2, 5],
            [14, 3, 4, 1],
            [12, 6, 8, 9],
            [16, 7, 10, 11],
          ]);
        else if (i === 2)
          expect(input).toStrictEqual([
            [3, 1],
            [4, 2],
          ]);
        else if (i === 3) expect(input).toStrictEqual([[1]]);
        else expect(input).toStrictEqual([[]]);
      });
    });
  });

  describe("maxProfit algorithms", () => {
    test("maxProfit trading stocks with 1 transaction", () => {
      expect(maxProfitOneTxn([7, 1, 5, 3, 6, 4])).toBe(5);
      expect(maxProfitOneTxn([1, 2, 3, 4, 5])).toBe(4);
      expect(maxProfitOneTxn([7, 6, 4, 3, 1])).toBe(0);
    });
    test("maxProfit trading stocks with no limit on transactions", () => {
      expect(maxProfitMultiTxn([7, 1, 5, 3, 6, 4])).toBe(7);
      expect(maxProfitMultiTxn([1, 2, 3, 4, 5])).toBe(4);
      expect(maxProfitMultiTxn([7, 6, 4, 3, 1])).toBe(0);
    });
    test("maxProfit trading stocks with two transactions", () => {
      expect(maxProfitTwoTxn([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6);
      expect(maxProfitTwoTxn([1, 2, 3, 4, 5])).toBe(4);
      expect(maxProfitTwoTxn([7, 6, 4, 3, 1])).toBe(0);
      expect(maxProfitTwoTxn([1])).toBe(0);
    });
    test("maxProfit trading stocks with k transactions", () => {
      expect(maxProfitKTxn([2, 4, 1], 2)).toBe(2);
      expect(maxProfitKTxn([3, 2, 6, 5, 0, 3], 2)).toBe(7);
    });
  });

  test("removeDuplicates and returns new array length", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });

  describe("containsDuplicate", () => {
    test("containsDuplicateSet", () => {
      expect(containsDuplicateSet([1, 2, 3, 1])).toBeTruthy();
      expect(containsDuplicateSet([1, 2, 3, 4])).toBeFalsy();
    });
    test("containsDuplicateObj", () => {
      expect(containsDuplicateObj([1, 2, 3, 4])).toBeFalsy();
      expect(containsDuplicateObj([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
    });
    test("containsDuplicateMap", () => {
      expect(containsDuplicateMap([1, 2, 3, 4])).toBeFalsy();
      expect(containsDuplicateMap([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
    });
  });

  describe("singleNumber finds number with no duplicates", () => {
    test("singleNumberMap", () => {
      expect(singleNumberMap([2, 2, 1])).toBe(1);
      expect(singleNumberMap([4, 1, 2, 1, 2])).toBe(4);
      expect(singleNumberMap([4, 1, 3, 3, 2, 1, 2, 5, 5])).toBe(4);
      expect(singleNumberMap([1])).toBe(1);
    });
    test("singleNumberObj", () => {
      expect(singleNumberObj([2, 2, 1])).toBe(1);
      expect(singleNumberObj([4, 1, 2, 1, 2])).toBe(4);
      expect(singleNumberObj([4, 1, 3, 3, 2, 1, 2, 5, 5])).toBe(4);
      expect(singleNumberObj([1])).toBe(1);
    });
    test("singleNumberBitwise", () => {
      expect(singleNumberBitwise([2, 2, 1])).toBe(1);
      expect(singleNumberBitwise([4, 1, 2, 1, 2])).toBe(4);
      expect(singleNumberBitwise([4, 1, 3, 3, 2, 1, 2, 5, 5])).toBe(4);
      expect(singleNumberBitwise([1])).toBe(1);
    });
  });

  test("intersect returns unordered subarray of common elements between two input arrays", () => {
    expect(
      intersect([4, 9, 5], [9, 4, 9, 8, 4]).sort((a, b) => a - b)
    ).toEqual([4, 9]);
    expect(intersect([1, 2, 2, 1], [2, 2]).sort((a, b) => a - b)).toEqual([
      2,
      2,
    ]);
  });

  test("digitPlusOne returns incremented integer represented as an arr of digits", () => {
    expect(digitPlusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(digitPlusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    expect(digitPlusOne([0])).toEqual([1]);
  });

  test("twoSum returns tuple of arr elements that sum to target input", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([4, 3, 2], 6)).toEqual([0, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    expect(twoSum([3, 3], 10)).toBeNull();
  });

  test("mapProductExcludeCurrIdx maps elements of input arr to the product of all other elements excluding the current element", () => {
    expect(mapProductExcludeCurrIdx([1, 7, 3, 4])).toEqual([84, 12, 28, 21]);
    expect(mapProductExcludeCurrIdx([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  describe("threeNumMaxProduct", () => {
    test("threeNumMaxProduct returns max product of three integers of input arr by initially sorting", () => {
      expect(threeNumMaxProduct([1, 2, 3])).toBe(6);
      expect(threeNumMaxProduct([1, 2, 3, 4])).toBe(24);
      expect(threeNumMaxProduct([-10, -5, -1, -2, -3, 4])).toBe(200);
    });
    test("threeNumMaxProductNoSort returns max product of three integers of input arr by initially sorting", () => {
      expect(threeNumMaxProductNoSort([1, 2, 3])).toBe(6);
      expect(threeNumMaxProductNoSort([1, 2, 3, 4])).toBe(24);
      expect(threeNumMaxProductNoSort([-10, -5, -1, -2, -3, 4])).toBe(200);
    });
  });

  test("productSum returns sum of integers where nested arrays are summed and then the global sum is multiplied by the nested array sum  ", () => {
    expect(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])).toBe(12);
    expect(productSum([[[[[5]]]]])).toBe(600);
    expect(productSum([[1, 2], 3, [4, 5]])).toBe(27);
  });

  test("moveZeroes mutates arr in-place by moving all zeroes to the end of the list", () => {
    const arr1 = [0, 0, 1],
      arr2 = [0, 1, 0, 3, 12],
      arr3 = [0, 0, 4, 9, 0, 22, 0, 3, 0, 100];
    moveZeroes(arr1);
    moveZeroes(arr2);
    moveZeroes(arr3);
    expect(arr1).toEqual([1, 0, 0]);
    expect(arr2).toEqual([1, 3, 12, 0, 0]);
    expect(arr3).toEqual([4, 9, 22, 3, 100, 0, 0, 0, 0, 0]);
    const nums1 = [0, 0, 1],
      nums2 = [0, 1, 0, 3, 12],
      nums3 = [0, 0, 4, 9, 0, 22, 0, 3, 0, 100];
    moveZeroesIter(nums1);
    moveZeroesIter(nums2);
    moveZeroesIter(nums3);
    expect(nums1).toEqual([1, 0, 0]);
    expect(nums2).toEqual([1, 3, 12, 0, 0]);
    expect(nums3).toEqual([4, 9, 22, 3, 100, 0, 0, 0, 0, 0]);
  });

  test("nextGreatestLetter returns the smallest letter from a sorted list of lowercase letters that is larger than target letter", () => {
    expect(nextGreatestLetter(["c", "f", "j"], "a")).toBe("c");
    expect(nextGreatestLetter(["c", "f", "j"], "c")).toBe("f");
    expect(nextGreatestLetter(["c", "f", "j"], "d")).toBe("f");
    expect(nextGreatestLetter(["c", "f", "j"], "g")).toBe("j");
    expect(nextGreatestLetter(["c", "f", "j"], "j")).toBe("c");
    expect(nextGreatestLetter(["c", "f", "j"], "k")).toBe("c");
  });

  test("diagonalSum sums diagonals of input matrix", () => {
    expect(
      diagonalSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toBe(25);
    expect(
      diagonalSum([
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ])
    ).toBe(8);
    expect(
      diagSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toBe(25);
    expect(
      diagSum([
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ])
    ).toBe(8);
  });

  describe("runningSum", () => {
    test("runningSum maps input arr so that each element is the sum of all previous elements inclusive", () => {
      expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
      expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
      expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
    });
    test("runningSumMut mutates input arr so that each element is the sum of all previous elements inclusive", () => {
      expect(runningSumMut([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
      expect(runningSumMut([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
      expect(runningSumMut([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
    });
  });

  test("isArithmeticProgression returns true if the array can be rearranged to form an arithmetic progression, else return false (sequence is an arithmetic progression if the difference between any two consecutive elements is the same)", () => {
    expect(isArithmeticProgression([3, 5, 1])).toBe(true);
    expect(isArithmeticProgression([1, 2, 4])).toBe(false);
  });

  test("thirdMax returns third max number from arr if it exists, else return max", () => {
    expect(thirdMax([3, 2, 1])).toBe(1);
    expect(thirdMax([1, 2])).toBe(2);
    expect(thirdMax([2, 2, 3, 1])).toBe(1);
  });

  test("countNegatives returns the number of negative numbers in input matrix. Matrix is an m * n grid which is sorted in non-increasing order", () => {
    expect(
      countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
      ])
    ).toBe(8);
    expect(
      countNegatives([
        [3, 2],
        [1, 0],
      ])
    ).toBe(0);
    expect(
      countNegatives([
        [1, -1],
        [-1, -1],
      ])
    ).toBe(3);
    expect(countNegatives([[-1]])).toBe(1);
  });

  test("maxTwoNumProduct returns max value of (someElement1 - 1) * (someElement2 - 1) where the input arr contains integers >= 1", () => {
    expect(maxTwoNumProduct([3, 4, 5, 2])).toBe(12);
    expect(maxTwoNumProduct([1, 5, 4, 5])).toBe(16);
    expect(maxTwoNumProduct([3, 7])).toBe(12);
  });

  test("isValidSudoku", () => {
    expect(
      isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ])
    ).toBe(true);
    expect(
      isValidSudoku([
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ])
    ).toBe(false);
  });

  test("kthLargestElementInArr returns the kth largest non-unique number from input arr", () => {
    expect(kthLargestElementInArr([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(kthLargestElementInArr([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
    expect(() => kthLargestElementInArr([3, 2, 1, 5, 6, 4], -1)).toThrow();
    expect(() => kthLargestElementInArr([3, 2, 1, 5, 6, 4], 7)).toThrow();
  });

  test("topKFrequentElements returns the kth largest non-unique number from input arr", () => {
    expect(topKFrequentElements([1, 1, 1, 2, 2, 3], 2).sort()).toEqual([1, 2]);
    expect(
      topKFrequentElements([3, 2, 3, 1, 2, 4, 5, 5, 5, 6, 1], 4).sort()
    ).toEqual([1, 2, 3, 5]);
    expect(topKFrequentElements([1], 1)).toEqual([1]);
    expect(() => topKFrequentElements([3, 2, 1, 5, 6, 4], -1)).toThrow();
    expect(() => topKFrequentElements([3, 2, 1, 5, 6, 4], 7)).toThrow();
  });
});
