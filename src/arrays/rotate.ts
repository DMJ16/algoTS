export function rotate(nums: number[], k: number): void {
  nums.unshift(...nums.splice(-k));
}

export function rotateIter(nums: number[], k: number): void {
  if (nums.length <= 1) return;
  while (k > 0) {
    nums.unshift(nums[nums.length - 1]);
    nums.pop();
    k--;
  }
}
