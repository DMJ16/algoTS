export function kadanesAlgo(nums: number[]): number {
  let maxAtIdx = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    maxAtIdx = Math.max(num, maxAtIdx + num);
    currentMax = Math.max(currentMax, maxAtIdx);
  }

  return currentMax;
}

export function kadanesAlgoFP(nums: number[]): number {
  return nums.reduce<[currentMax: number, maxAtIdx: number]>(
    ([currentMax, maxAtIdx], val, i) =>
      i === 0
        ? [currentMax, maxAtIdx]
        : [Math.max(currentMax, maxAtIdx), Math.max(val, val + maxAtIdx)],
    [nums[0], nums[0]]
  )[0];
}
