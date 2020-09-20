export function spiralTraversal(arr: number[][]): number[] {
  const result: number[] = [];
  let startRow = 0;
  let endRow = arr.length - 1;
  let startCol = 0;
  let endCol = arr[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(arr[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(arr[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(arr[endRow][col]);
    }

    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(arr[row][startCol]);
    }

    startRow++;
    startCol++;
    endRow--;
    endCol--;
  }

  return result;
}
