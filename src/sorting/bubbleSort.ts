export function bubbleSort(arr: number[]): number[] {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = false;
      }
    }
    counter++;
  }

  return arr;
}
