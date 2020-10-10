export function moveZeroes(arr: number[]) {
  const items = [
    ...arr.filter((val) => val !== 0),
    ...arr.filter((val) => val === 0),
  ];
  arr.splice(0, arr.length, ...items);
}

export function moveZeroesIter(arr: number[]): void {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
    }
  }
}
