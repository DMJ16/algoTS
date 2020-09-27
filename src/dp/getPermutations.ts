export function getNumPermutations(arr: number[]): number[][] {
  const result: number[][] = [];
  function permHelper(i: number, arr: number[], result: number[][]) {
    if (i === arr.length - 1) {
      result.push(arr.slice());
    } else {
      for (let j = i; j < arr.length; j++) {
        swap(i, j, arr);
        permHelper(i + 1, arr, result);
        swap(i, j, arr);
      }
    }
  }
  permHelper(0, arr, result);
  return result;
}

function swap(i: number, j: number, arr: number[]) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export function getStrPermutations(str: string): string[] {
  if (str.length < 2) return [str];
  let result: Set<string> = new Set();
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1, str.length);
    for (const perm of getStrPermutations(remaining)) {
      result.add(current + perm);
    }
  }
  return [...result];
}
