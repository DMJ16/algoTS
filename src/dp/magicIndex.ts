export function magicIndex(arr: number[]): number {
  const helper = (arr: number[], left: number, right: number): number => {
    let mid = Math.floor((left + right) / 2);
    if (mid < left || mid > right) return -1;
    if (mid === arr[mid]) return mid;
    if (mid < arr[mid]) return helper(arr, left, mid - 1);
    return helper(arr, mid + 1, right);
  };
  return helper(arr, 0, arr.length - 1);
}
