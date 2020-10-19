export function rotateArr(nums: number[], k: number): void {
  nums.unshift(...nums.splice(-k));
}

export function rotateArrIter(nums: number[], k: number): void {
  if (nums.length <= 1) return;
  while (k > 0) {
    nums.unshift(nums[nums.length - 1]);
    nums.pop();
    k--;
  }
}

export function rotateMatrix(matrix: number[][]): void {
  if (matrix.length === 1 && (matrix[0].length === 0 || matrix[0].length === 1))
    return;

  const swap = (matrix: number[][]) => (rowIdx: number) => (colIdx: number) => {
    [matrix[rowIdx][colIdx], matrix[colIdx][rowIdx]] = [
      matrix[colIdx][rowIdx],
      matrix[rowIdx][colIdx],
    ];
  };

  matrix.reverse().forEach((row, rowIdx, matrix) => {
    for (let colIdx = rowIdx; colIdx < row.length; colIdx++) {
      swap(matrix)(rowIdx)(colIdx);
    }
  });
}
