import {
  coinChange,
  levenshteinDistance,
  maxSubsetSumNoAdjacent,
  magicIndex,
  climbStairs,
  climbStairsMemo,
  genParens,
  uniquePaths,
  getNumPermutations,
  getStrPermutations,
  getNthFibIter,
  fibMemo,
  getNthFibExp,
  getNthFibDP,
  factorialRecurse,
  factorialIter,
  specialPythagoreanTriplet,
  pow,
  getNumInPascalsTriangle,
  getNumInPascalsTriangleMemo,
  generatePascalsTriangle,
  getRowOfPascalsTriangle,
  kadanesAlgo,
  kadanesAlgoFP,
  rob,
  robHouse,
  countPrimes,
  genPrimes,
} from "../dp";

describe("dynamic programming algorithms", () => {
  test("return smallest combination of coins in array to sum to given target", () => {
    expect(coinChange([1], 1)).toBe(1);
    expect(coinChange([1], 2)).toBe(2);
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  test("return max subset sum of adjacent elements in array", () => {
    expect(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])).toBe(330);
  });

  test("levenshtein distance", () => {
    expect(levenshteinDistance("abc", "yabd")).toBe(2);
    expect(levenshteinDistance("abc", "abc")).toBe(0);
    expect(levenshteinDistance("xabc", "abcx")).toBe(2);
    expect(levenshteinDistance("abc", "xyz")).toBe(3);
    expect(levenshteinDistance("horse", "ros")).toBe(3);
  });

  test("magicIndex", () => {
    expect(magicIndex([-10, -5, 0, 1, 15, 20])).toBe(-1);
    expect(magicIndex([0, 1, 3, 4, 20])).toBe(0);
    expect(magicIndex([-1, 1, 3, 4, 20])).toBe(1);
    expect(magicIndex([-1, 0, 2, 4, 20])).toBe(2);
    expect(magicIndex([-1, 0, 1, 3, 20])).toBe(3);
    expect(magicIndex([-10, -5, 0, 1, 4, 20])).toBe(4);
    expect(magicIndex([-10, -5, 0, 1, 2, 5])).toBe(5);
  });

  test("climbStairs", () => {
    expect(climbStairs(0)).toBe(0);
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(1);
    expect(climbStairs(3)).toBe(2);
    expect(climbStairs(4)).toBe(3);
    expect(climbStairs(5)).toBe(5);
    expect(climbStairs(6)).toBe(8);
    expect(climbStairs(7)).toBe(13);
  });

  test("climbStairsMemo", () => {
    expect(climbStairsMemo(0)).toBe(0);
    expect(climbStairsMemo(1)).toBe(1);
    expect(climbStairsMemo(2)).toBe(1);
    expect(climbStairsMemo(3)).toBe(2);
    expect(climbStairsMemo(4)).toBe(3);
    expect(climbStairsMemo(5)).toBe(5);
    expect(climbStairsMemo(6)).toBe(8);
    expect(climbStairsMemo(7)).toBe(13);
  });

  test("generateParentheses", () => {
    expect(genParens(3)).toStrictEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ]);
  });

  test("uniquePaths", () => {
    expect(uniquePaths(3, 2)).toBe(3);
    expect(uniquePaths(7, 3)).toBe(28);
  });

  test("getNumPermutations", () => {
    expect(getNumPermutations([1, 2, 3])).toStrictEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2],
    ]);
    expect(getNumPermutations([1, 2, 3, 4])).toStrictEqual([
      [1, 2, 3, 4],
      [1, 2, 4, 3],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [1, 4, 3, 2],
      [1, 4, 2, 3],
      [2, 1, 3, 4],
      [2, 1, 4, 3],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [2, 4, 3, 1],
      [2, 4, 1, 3],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [3, 1, 2, 4],
      [3, 1, 4, 2],
      [3, 4, 1, 2],
      [3, 4, 2, 1],
      [4, 2, 3, 1],
      [4, 2, 1, 3],
      [4, 3, 2, 1],
      [4, 3, 1, 2],
      [4, 1, 3, 2],
      [4, 1, 2, 3],
    ]);
  });

  test("getStrPermutations", () => {
    expect(getStrPermutations("")).toStrictEqual([""]);
    expect(getStrPermutations("abc")).toStrictEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });

  test("fibonacci function recursive solution", () => {
    expect(fibMemo(0)).toBe(0);
    expect(fibMemo(1)).toBe(1);
    expect(fibMemo(2)).toBe(1);
    expect(fibMemo(3)).toBe(2);
    expect(fibMemo(4)).toBe(3);
    expect(fibMemo(5)).toBe(5);
    expect(fibMemo(6)).toBe(8);
    expect(fibMemo(7)).toBe(13);
  });

  test("fibonacci function dp solution", () => {
    expect(getNthFibDP(0)).toBe(0);
    expect(getNthFibDP(1)).toBe(1);
    expect(getNthFibDP(2)).toBe(1);
    expect(getNthFibDP(3)).toBe(2);
    expect(getNthFibDP(4)).toBe(3);
    expect(getNthFibDP(5)).toBe(5);
    expect(getNthFibDP(6)).toBe(8);
    expect(getNthFibDP(7)).toBe(13);
  });

  test("fibonacci function iterative solution", () => {
    expect(getNthFibIter(0)).toBe(0);
    expect(getNthFibIter(1)).toBe(1);
    expect(getNthFibIter(2)).toBe(1);
    expect(getNthFibIter(3)).toBe(2);
    expect(getNthFibIter(4)).toBe(3);
    expect(getNthFibIter(5)).toBe(5);
    expect(getNthFibIter(6)).toBe(8);
    expect(getNthFibIter(7)).toBe(13);
  });

  test("fibonacci function exponential solution", () => {
    expect(getNthFibExp(0)).toBe(0);
    expect(getNthFibExp(1)).toBe(1);
    expect(getNthFibExp(2)).toBe(1);
    expect(getNthFibExp(3)).toBe(2);
    expect(getNthFibExp(4)).toBe(3);
    expect(getNthFibExp(5)).toBe(5);
    expect(getNthFibExp(6)).toBe(8);
    expect(getNthFibExp(7)).toBe(13);
  });

  test("factorial function recursive solution", () => {
    expect(factorialRecurse(-1)).toBe(1);
    expect(factorialRecurse(0)).toBe(1);
    expect(factorialRecurse(1)).toBe(1);
    expect(factorialRecurse(2)).toBe(2);
    expect(factorialRecurse(3)).toBe(6);
    expect(factorialRecurse(4)).toBe(24);
    expect(factorialRecurse(5)).toBe(120);
    expect(factorialRecurse(6)).toBe(720);
  });

  test("factorial function iterative solution", () => {
    expect(factorialIter(-1)).toBe(1);
    expect(factorialIter(0)).toBe(1);
    expect(factorialIter(1)).toBe(1);
    expect(factorialIter(2)).toBe(2);
    expect(factorialIter(3)).toBe(6);
    expect(factorialIter(4)).toBe(24);
    expect(factorialIter(5)).toBe(120);
    expect(factorialIter(6)).toBe(720);
  });

  test("special pythagorean triplet where a + b + c === 1000", () => {
    expect(specialPythagoreanTriplet()).toBe(31875000);
  });

  test("return x to the nth power", () => {
    expect(pow(2, 0)).toBe(1);
    expect(pow(2, 1)).toBe(2);
    expect(pow(2, 2)).toBe(4);
    expect(pow(2, 7)).toBe(128);
  });

  test("pascal's triangle", () => {
    expect(getNumInPascalsTriangle(1, 1)).toBe(1);
    expect(getNumInPascalsTriangle(3, 2)).toBe(2);
    expect(getNumInPascalsTriangle(5, 3)).toBe(6);
  });

  test("pascal's triangle memoized", () => {
    expect(getNumInPascalsTriangleMemo(1, 1)).toBe(1);
    expect(getNumInPascalsTriangleMemo(3, 2)).toBe(2);
    expect(getNumInPascalsTriangleMemo(5, 3)).toBe(6);
  });

  test("generate pascal's triangle", () => {
    expect(generatePascalsTriangle(1)).toStrictEqual([[1]]);
    expect(generatePascalsTriangle(2)).toStrictEqual([[1], [1, 1]]);
    expect(generatePascalsTriangle(3)).toStrictEqual([[1], [1, 1], [1, 2, 1]]);
  });

  test("get full row from pascal's triangle given row index", () => {
    expect(getRowOfPascalsTriangle(0)).toStrictEqual([1]);
    expect(getRowOfPascalsTriangle(1)).toStrictEqual([1, 1]);
    expect(getRowOfPascalsTriangle(2)).toStrictEqual([1, 2, 1]);
    expect(getRowOfPascalsTriangle(3)).toStrictEqual([1, 3, 3, 1]);
  });

  test("kadane's algorithm for finding max subarray", () => {
    expect(
      kadanesAlgo([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
    ).toBe(19);
    expect(kadanesAlgo([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5])).toBe(-1);

    expect(
      kadanesAlgoFP([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
    ).toBe(19);
    expect(kadanesAlgoFP([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5])).toBe(-1);
  });

  test("rob returns the max amount possible to steal given that adjacent homes (elements of input arr) cannot both be robbed without alerting the police", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
    expect(rob([2, 1, 1, 2])).toBe(4);

    expect(robHouse([1, 2, 3, 1])).toBe(4);
    expect(robHouse([2, 7, 9, 3, 1])).toBe(12);
    expect(robHouse([2, 1, 1, 2])).toBe(4);
  });

  describe("primes", () => {
    test("countPrimes returns total number of primes less than or equal to a non-negative number", () => {
      expect(countPrimes(5)).toBe(3);
      expect(countPrimes(20)).toBe(8);
      expect(countPrimes(50)).toBe(15);
    });
    test("genPrimes returns an arr of all prime numbers less than or equal to a non-negative number", () => {
      expect(genPrimes(5)).toStrictEqual([2, 3, 5]);
      expect(genPrimes(20)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19]);
      expect(genPrimes(50)).toStrictEqual([
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
      ]);
    });
  });
});
