export function maxTwoNumProduct(nums: number[]): number {
  return nums
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((product, val) => product * (val - 1), 1);
}
