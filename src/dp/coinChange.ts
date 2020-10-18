export function coinChange(coins: number[], amount: number): number {
  const memo = new Array<number>(amount + 1).fill(Infinity);
  memo[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        memo[i] = Math.min(memo[i], memo[i - coins[j]] + 1);
      }
    }
  }
  return memo[amount] === Infinity ? -1 : memo[amount];
}
