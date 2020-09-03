interface Memoize {
  [key: string]: number;
}
export function getNthFibRecurse(
  n: number,
  mem: Memoize = { 1: 0, 2: 1 }
): number {
  if (n in mem) {
    return mem[n];
  } else {
    mem[n] = getNthFibRecurse(n - 1, mem) + getNthFibRecurse(n - 2, mem);
    return mem[n];
  }
}

export function getNthFibIter(n: number): number {
  const lastTwoNums = [0, 1];
  let count = 3;
  while (count <= n) {
    const nextNum = lastTwoNums[0] + lastTwoNums[1];
    lastTwoNums[0] = lastTwoNums[1];
    lastTwoNums[1] = nextNum;
    count++;
  }
  return n > 1 ? lastTwoNums[1] : lastTwoNums[0];
}
