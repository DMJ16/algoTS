export function moveElementToEnd(arr: number[], numMove: number): number[] {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (i < j && arr[j] === numMove) j--;
    if (arr[i] === numMove) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    i++;
  }
  return arr;
}
