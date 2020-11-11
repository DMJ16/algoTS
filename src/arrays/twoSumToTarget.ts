export function twoSumToTarget(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number>();
  nums.forEach((num) => numsMap.set(num, num));
  return nums.reduceRight<number[]>(
    (result, num, idx, nums) =>
      numsMap.has(target - num)
        ? [idx + 1, nums.lastIndexOf(target - num) + 1]
        : result,
    []
  );
}
