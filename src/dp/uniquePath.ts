export function uniquePaths(m: number, n: number): number {
  const memo = new Array<number>(n + 1).fill(1);

  for (let row = m - 1; row > 0; row--) {
    for (let col = n - 1; col > 0; col--) {
      memo[col] = memo[col] + memo[col + 1];
    }
  }
  return memo[1];
}

function uniqPaths(m: number, n: number): number {
  function traverse(m: number, n: number, row: number, col: number): number {
    if (m === row && n === col) return 1;
    if (m < row || n < col) return 0;
    const right = traverse(m, n, row, col + 1);
    const down = traverse(m, n, row + 1, col);
    return right + down;
  }
  return traverse(m, n, 1, 1);
}
