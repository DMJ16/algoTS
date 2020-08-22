export function reduce(
  this: number[],
  reducer: (
    acc: number,
    arg: number,
    index?: number,
    array?: number[]
  ) => number,
  initVal?: number
): number {
  const arr = this;
  let accumulator = initVal ?? 0;

  for (let i = 0; i < arr.length; i++) {
    accumulator = reducer(accumulator, arr[i], i, arr);
  }

  return accumulator;
}
