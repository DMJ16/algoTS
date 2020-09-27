export function zigzagTraverse(arr: number[][]): number[] {
  const height = arr.length - 1;
  const width = arr[0].length - 1;
  const result: number[] = [];
  let row = 0;
  let col = 0;
  let goingDown = true;
  while (!isOutOfBounds(row, col, height, width)) {
    result.push(arr[row][col]);
    if (goingDown) {
      if (col === 0 || row === height) {
        goingDown = false;
        if (row === height) col++;
        else row++;
      } else {
        row++;
        col--;
      }
    } else {
      if (row === 0 || col === width) {
        goingDown = true;
        if (col === width) row++;
        else col++;
      } else {
        row--;
        col++;
      }
    }
  }
  return result;
}

function isOutOfBounds(
  row: number,
  col: number,
  height: number,
  width: number
): boolean {
  return row > height || row < 0 || col > width || col < 0;
}
