export function diagonalSum(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
    if (i !== matrix.length - i - 1) sum += matrix[i][matrix.length - i - 1];
  }
  return sum;
}

export function diagSum(matrix: number[][]) {
  const skip = (matrix: number[][]) =>
    matrix.length % 2 !== 0
      ? matrix[Math.floor(matrix.length / 2)][Math.floor(matrix.length / 2)]
      : 0;

  return matrix.reduce(
    (sum, row, i) => sum + row[i] + row[row.length - i - 1],
    0 - skip(matrix)
  );
}
