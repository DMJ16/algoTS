const threeNumSumZero = (nums: number[]): number[][] => {
  const triplets: number[][] = [];
  if (nums.length < 3) return triplets;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        triplets.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return triplets;
};

const _threeNumSumZero = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const resultMap = new Map<string, number[]>();

  for (let right = nums.length - 1; right > 1; right--) {
    let left = 0;
    let mid = right - 1;
    while (left < mid) {
      const sum = nums[left] + nums[mid] + nums[right];
      if (sum < 0) left++;
      else if (sum > 0) mid--;
      else {
        resultMap.set(`${nums[left]}${nums[mid]}${nums[right]}`, [
          nums[left],
          nums[mid],
          nums[right],
        ]);
        left++;
        mid--;
      }
    }
  }

  return [...resultMap.values()];
};
