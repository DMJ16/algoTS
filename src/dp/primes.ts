export function countPrimes(maxNum: number): number {
  const dp = new Array<boolean>(maxNum + 1).fill(true);
  dp[0] = false;
  dp[1] = false;
  let count = 0;

  for (let num = 2; num <= maxNum; num++) {
    if (dp[num]) {
      count++;
      let nextNum = num * num;
      while (nextNum <= maxNum) {
        dp[nextNum] = false;
        nextNum += num;
      }
    }
  }

  return count;
}

export function genPrimes(maxNum: number): number[] {
  const dp = new Array<boolean>(maxNum + 1).fill(true);
  dp[0] = false;
  dp[1] = false;
  const primes: number[] = [];

  for (let num = 2; num <= maxNum; num++) {
    if (dp[num]) {
      primes.push(num);
      let nextNum = num * num;
      while (nextNum <= maxNum) {
        dp[nextNum] = false;
        nextNum += num;
      }
    }
  }

  return primes;
}
