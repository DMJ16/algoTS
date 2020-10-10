export function rob(arr: number[]): number {
  const [_, max] = arr.reduce(
    (memo, num) => [memo[1], Math.max(memo[1], memo[0] + num)],
    [0, 0]
  );
  return max;
}

export function robHouse(arr: number[]): number {
  if (arr.length === 0) return 0;
  const memo = new Array(arr.length + 1);
  memo[0] = 0;
  memo[1] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + arr[i]);
  }
  return memo[arr.length];
}
