export function runningSum(arr: number[]): number[] {
  let sum = 0;
  return arr.map((val) => (sum += val));
}

export function runningSumMut(arr: number[]): number[] {
  arr.reduce((sum, _, i, arr) => (arr[i] += sum));
  return arr;
}
