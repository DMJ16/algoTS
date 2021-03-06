export function transposeMatrix(matrix: number[][]): number[][] {
  return matrix[0].map((_, colIdx) => matrix.map((row) => row[colIdx]));
}
