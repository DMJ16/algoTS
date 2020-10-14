export function countNegatives(grid: number[][]): number {
  const flattenedArr = ([] as number[]).concat(...grid);
  return flattenedArr.reduce((count, val) => {
    if (val < 0) return ++count;
    else return count;
  }, 0);
}
