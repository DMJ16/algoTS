export function selectionSort(arr: number[]): number[] {
  let startIdx = 0;
  while (startIdx < arr.length) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < arr.length; i++) {
      if (arr[smallestIdx] > arr[i]) smallestIdx = i;
    }
    [arr[smallestIdx], arr[startIdx]] = [arr[startIdx], arr[smallestIdx]];
    startIdx++;
  }
  return arr;
}
