export function removeElement(nums: number[], val: number): number {
  return nums.reduceRight<number>((len, num, idx, nums) => {
    if (num === val) {
      nums.splice(idx, 1);
      return --len;
    }
    return len;
  }, nums.length);
}
