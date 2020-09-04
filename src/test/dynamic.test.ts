import {
  coinChange,
  levenshteinDistance,
  maxSubsetSumNoAdjacent,
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
});
