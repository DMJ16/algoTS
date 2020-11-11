export function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number>();
  nums.forEach((num, idx) => numsMap.set(num, idx));
  return nums.reduceRight<number[]>(
    (result, num, idx, nums) =>
      numsMap.has(target - num) && nums.lastIndexOf(target - num) !== idx
        ? [idx, nums.lastIndexOf(target - num)]
        : result,
    []
  );
}

export function _twoSum(nums: number[], target: number): number[] | null {
  const numsMap = new Map<number, number>();
  for (const [i, num] of nums.entries()) {
    if (numsMap.has(num)) {
      const idx = numsMap.get(num);
      if (idx !== undefined) return [idx, i];
    }
    numsMap.set(target - num, i);
  }
  return null;
}
