export function getNumInPascalsTriangle(row: number, col: number): number {
  if (col === 1 || row === col) return 1;
  return (
    getNumInPascalsTriangle(row - 1, col - 1) +
    getNumInPascalsTriangle(row - 1, col)
  );
}

export function getNumInPascalsTriangleMemo(
  row: number,
  col: number,
  cache: { [key: string]: number[] } = {}
): number {
  if (row in cache && cache[row][col] !== undefined) return cache[row][col];
  if (col < 0 || col > row) return 0;
  if (col === 1 || col === row) return 1;
  if (!(row in cache)) cache[row] = [];
  cache[row][col] =
    getNumInPascalsTriangleMemo(row - 1, col - 1) +
    getNumInPascalsTriangleMemo(row - 1, col);
  return cache[row][col];
}

export function getRowOfPascalsTriangle(rowIdx: number): number[] {
  const row: number[] = [1];
  for (let i = 1; i <= rowIdx; i++) {
    for (let j = i; j > 0; j--) {
      if (j === i) row[j] = 1;
      else row[j] = row[j - 1] + row[j];
    }
  }
  return row;
}

export function generatePascalsTriangle(numRows: number): number[][] {
  const pascal: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row: number[] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) row.push(1);
      else row.push(pascal[i - 1][j - 1] + pascal[i - 1][j]);
    }
    pascal.push(row);
  }
  return pascal;
}
