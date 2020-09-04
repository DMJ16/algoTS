export function binarySearch(arr: number[], target: number): number {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (mid !== target && start <= end) {
    if (target < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === target ? mid : -1;
}
