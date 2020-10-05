interface Cache {
  [key: string]: number;
}
export function fibMemo(n: number, memo: Cache = { 0: 0, 1: 1 }): number {
  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
  }
}

export function getNthFibDP(n: number): number {
  const lastTwoNums = [0, 1];
  let count = 2;
  while (count <= n) {
    const nextNum = lastTwoNums[0] + lastTwoNums[1];
    lastTwoNums[0] = lastTwoNums[1];
    lastTwoNums[1] = nextNum;
    count++;
  }
  return n >= 1 ? lastTwoNums[1] : lastTwoNums[0];
}

export function getNthFibIter(n: number): number {
  let first = 0;
  let second = 1;
  if (n > 0) {
    while (--n) {
      const t = first + second;
      first = second;
      second = t;
    }
    return second;
  }
  return first;
}

export function getNthFibExp(n: number): number {
  let sqrt5 = Math.sqrt(5);
  let phi = (1 + sqrt5) / 2;
  let q = 1 / phi;
  return Math.floor((Math.pow(phi, n) + Math.pow(q, n)) / sqrt5);
}
