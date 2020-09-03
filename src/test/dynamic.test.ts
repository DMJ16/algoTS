import { coinChange, maxSubsetSumNoAdjacent } from "../dynamic";

describe("dynamic programming problems", () => {
  test("returns smallest combination of coins in array to sum to given target", () => {
    expect(coinChange([1], 1)).toBe(1);
    expect(coinChange([1], 2)).toBe(2);
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  test("returns max subset sum of adjacent elements in array", () => {
    expect(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])).toBe(330);
  });
});
