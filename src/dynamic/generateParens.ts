export function generateParens(n: number): string[] {
  const results: string[] = [];
  function helper(opening: number, closing: number, str: string): void {
    if (opening > closing) return;
    if (opening === 0 && closing === 0) {
      results.push(str);
      return;
    }
    if (opening > 0) return helper(opening - 1, closing, str + `(`);
    if (closing > 0) return helper(opening, closing - 1, str + `)`);
  }
  helper(n, n, "");
  return results;
}

export function genParens(n: number): string[] {
  const results: string[] = [];
  genAll(new Array<string>(n * 2), 0, results);
  return results;
}

function isValid(arr: string[]): boolean {
  let balance = 0;
  for (let i = 0; i < arr.length; i++) {
    let c = arr[i];
    if (c === "(") {
      balance++;
    } else if (c === ")") {
      balance--;
    }
    if (balance < 0) {
      return false;
    }
  }
  return balance === 0;
}

function genAll(arr: string[], pos: number, results: string[]) {
  if (pos === arr.length) {
    if (isValid(arr)) results.push(arr.join(""));
  } else {
    arr[pos] = "(";
    genAll(arr, pos + 1, results);
    arr[pos] = ")";
    genAll(arr, pos + 1, results);
  }
}
