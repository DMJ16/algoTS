export function searchInsert(nums: number[], target: number): number {
  if (nums.length === 0) throw new Error("input array is empty");
  return nums.indexOf(target) !== -1
    ? nums.indexOf(target)
    : target > nums[nums.length - 1]
    ? nums.length
    : nums.reduce(
        (resultIdx, num, idx) =>
          target < num && resultIdx === -1 ? idx : resultIdx,
        -1
      );
}
