export function permutation(nums: number[]): number[][] {
  const result: number[][] = [];
  permute(nums, result);
  return result;
}

function permute(nums: number[], result: number[][], set = new Set<number>()) {
  if (nums.length === set.size) {
    result.push([...set]);
    return;
  }

  for (const num of nums) {
    if (set.has(num)) continue;
    set.add(num);
    permute(nums, result, set);
    set.delete(num);
  }
}
