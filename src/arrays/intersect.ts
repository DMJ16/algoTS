export function intersect(nums1: number[], nums2: number[]): number[] {
  const store = nums1.reduce<{ [key: string]: number }>((obj, val) => {
    obj[val] = obj[val] + 1 || 1;
    return obj;
  }, {});

  return nums2.filter((num) => {
    if (store[num]) {
      store[num]--;
      return true;
    } else {
      return false;
    }
  });
}
