export function countPrimes(limit: number): number {
  const dp = new Array<boolean>(limit + 1).fill(true);
  dp[0] = false;
  dp[1] = false;
  let count = 0;

  for (let num = 2; num <= limit; num++) {
    if (dp[num]) {
      count++;
      let nextNum = num * num;
      while (nextNum <= limit) {
        dp[nextNum] = false;
        nextNum += num;
      }
    }
  }

  return count;
}

export function _countPrimes(limit: number): number {
  return new Array<boolean>(limit + 1)
    .fill(true)
    .reduce((count, isPrime, idx, arr) => {
      if (idx < 2) {
        arr[idx] = false;
        return count;
      }
      if (isPrime) {
        count++;
        let nextNum = idx * idx;
        while (nextNum <= limit) {
          arr[nextNum] = false;
          nextNum += idx;
        }
      }
      return count;
    }, 0);
}

export function genPrimes(limit: number): number[] {
  const dp = new Array<boolean>(limit + 1).fill(true);
  dp[0] = false;
  dp[1] = false;
  const primes: number[] = [];

  for (let num = 2; num <= limit; num++) {
    if (dp[num]) {
      primes.push(num);
      let nextNum = num * num;
      while (nextNum <= limit) {
        dp[nextNum] = false;
        nextNum += num;
      }
    }
  }

  return primes;
}
