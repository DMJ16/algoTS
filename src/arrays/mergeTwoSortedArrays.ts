export function mergeTwoSortedArrays(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let insertIdx = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[insertIdx--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
}
