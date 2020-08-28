export function kadanesAlgo(arr: number[]): number {
  let maxAtIdx = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    maxAtIdx = Math.max(num, maxAtIdx + num);
    currentMax = Math.max(currentMax, maxAtIdx);
  }

  return currentMax;
}
