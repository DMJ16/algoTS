export function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>();

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const val = board[row][col];
      if (val !== ".") {
        const colKey = `column-${val}-column-${col}`;
        const rowKey = `row-${val}-${row}`;
        const boxRowKey = Math.floor(row / 3);
        const boxColKey = Math.floor(col / 3);
        const boxKey = `box-${val}-${boxRowKey}-${boxColKey}`;
        if (seen.has(colKey) || seen.has(rowKey) || seen.has(boxKey)) {
          return false;
        } else {
          seen.add(colKey);
          seen.add(rowKey);
          seen.add(boxKey);
        }
      }
    }
  }

  return true;
}
