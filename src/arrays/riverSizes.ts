export function riverSizes(matrix: number[][]): number[] {
  const sizes: number[] = [];
  const visited: boolean[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    const row: boolean[] = [];
    visited.push(row);
    for (let j = 0; j < matrix[i].length; j++) {
      row[j] = false;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      let currentRiverSize = 0;
      const nodesToExplore = [[i, j]];
      while (nodesToExplore.length) {
        const currentNode = nodesToExplore.pop();
        let k = i;
        let v = j;
        if (currentNode) {
          k = currentNode[0];
          v = currentNode[1];
        }
        if (visited[k][v]) continue;
        visited[k][v] = true;
        if (matrix[k][v] === 0) continue;
        currentRiverSize++;
        const unvisitedNeighbors = getUnvisitedNeighbors(k, v, matrix, visited);
        for (let n = 0; n < unvisitedNeighbors.length; n++) {
          nodesToExplore.push(unvisitedNeighbors[n]);
        }
      }
      if (currentRiverSize > 0) sizes.push(currentRiverSize);
    }
  }
  return sizes;
}

function getUnvisitedNeighbors(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][]
): number[][] {
  const unvisitedNeighbors: number[][] = [];
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbors.push([i - 1, j]);
  }
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedNeighbors.push([i + 1, j]);
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1]);
  }
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1]);
  }
  return unvisitedNeighbors;
}
