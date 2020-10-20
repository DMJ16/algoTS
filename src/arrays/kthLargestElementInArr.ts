export function kthLargestElementInArr(nums: number[], k: number): number {
  if (k < 1 || k > nums.length)
    throw new Error("k is less than or greater than array length");
  return nums.sort((a, b) => b - a)[k - 1];
}
