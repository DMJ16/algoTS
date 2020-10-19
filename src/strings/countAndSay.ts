type Memo = Map<number, string>;

export function countAndSay(
  n: number,
  memo: Memo = new Map<number, string>([[1, "1"]])
): string {
  return memo.has(n)
    ? memo.get(n) ?? `undefined or null value at key: ${n}`
    : memo
        .set(
          n,
          countAndSay(n - 1, memo)
            .split("")
            .reduce<[current: string, i: number, j: number]>(
              ([current, i, j], _, __, previousValue) =>
                previousValue[j] !== previousValue[i]
                  ? [
                      current.concat(`${j - i}${previousValue[i]}`),
                      (i = j),
                      ++j,
                    ]
                  : [current, i, ++j],
              ["", 0, 1]
            )[0]
        )
        .get(n) ?? `undefined or null value at key: ${n}`;
}

// use obj as memo
type MemoObj = { [key: string]: string };
export function _countAndSay(n: number, memo: MemoObj = { 1: "1" }): string {
  if (memo[n]) return memo[n];
  memo[n] = _countAndSay(n - 1, memo)
    .split("")
    .reduce<[current: string, i: number, j: number]>(
      ([current, i, j], _, __, previousValue) =>
        previousValue[j] !== previousValue[i]
          ? [current.concat(`${j - i}${previousValue[i]}`), (i = j), ++j]
          : [current, i, ++j],
      ["", 0, 1]
    )[0];
  return memo[n];
}

// use obj as memo
// use iteration vs reduce
export function __countAndSay(n: number, memo: MemoObj = { 1: "1" }): string {
  if (memo[n]) return memo[n];
  const previousValue = __countAndSay(n - 1, memo).split("");
  memo[n] = "";
  for (let i = 0, j = 1; j <= previousValue.length; j++) {
    if (previousValue[i] !== previousValue[j]) {
      memo[n] += `${j - i}${previousValue[i]}`;
      i = j;
    }
  }
  return memo[n];
}
