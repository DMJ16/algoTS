export function quickSort(
  arr: number[],
  left = 0,
  right = arr.length - 1
): number[] {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
function pivot(
  arr: number[],
  start = Math.floor(arr.length / 2),
  end = arr.length - 1
): number {
  let pivot = arr[start];
  let pivotIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      swap(i, pivotIdx, arr);
    }
  }
  swap(start, pivotIdx, arr);
  return pivotIdx;
}
function swap(i: number, j: number, arr: number[]): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function quickSorter(arr: number[]): number[] {
  sorter(arr, 0, arr.length - 1);
  return arr;
}
function sorter(arr: number[], startIdx: number, endIdx: number): void {
  if (startIdx >= endIdx) return;
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
      swap(leftIdx, rightIdx, arr);
    }
    if (arr[leftIdx] <= arr[pivotIdx]) leftIdx++;
    if (arr[rightIdx] >= arr[pivotIdx]) rightIdx--;
  }
  swap(pivotIdx, rightIdx, arr);
  const leftSubArrIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubArrIsSmaller) {
    sorter(arr, startIdx, rightIdx - 1);
    sorter(arr, rightIdx + 1, endIdx);
  } else {
    sorter(arr, rightIdx + 1, endIdx);
    sorter(arr, startIdx, rightIdx - 1);
  }
}
