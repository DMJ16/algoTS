export function wordSearch(
  board: (string | undefined)[][],
  word: string
): boolean {
  let result = false;

  function traverse(rowIdx: number, colIdx: number, idx: number): void {
    if (!result) {
      if (
        rowIdx < 0 ||
        colIdx < 0 ||
        rowIdx >= board.length ||
        colIdx >= board[0].length
      )
        return;
      if (board[rowIdx][colIdx] !== word[idx]) return;
      if (idx === word.length) {
        result = true;
        return;
      }
      board[rowIdx][colIdx] = undefined;
      traverse(rowIdx + 1, colIdx, idx + 1);
      traverse(rowIdx - 1, colIdx, idx + 1);
      traverse(rowIdx, colIdx + 1, idx + 1);
      traverse(rowIdx, colIdx - 1, idx + 1);
      board[rowIdx][colIdx] = word[idx];
    }
  }
  for (let r = 0; r < board.length; r++) {
    const row = board[r];
    for (let c = 0; c < row.length; c++) {
      if (row[c] === word[0]) {
        traverse(r, c, 0);
        if (result) return result;
      }
    }
  }
  return result;
}
