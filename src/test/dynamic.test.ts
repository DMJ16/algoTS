import {
  coinChange,
  levenshteinDistance,
  maxSubsetSumNoAdjacent,
  magicIndex,
  climbStairs,
  genParens,
  uniquePaths,
} from "../dynamic";

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
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(1);
    expect(climbStairs(3)).toBe(1);
    expect(climbStairs(4)).toBe(2);
    expect(climbStairs(5)).toBe(3);
    expect(climbStairs(6)).toBe(5);
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
});
