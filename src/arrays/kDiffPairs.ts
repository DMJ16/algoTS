export function kDiffPairs(arr: number[], k: number): number {
  if (arr.length === 0 || k < 0) return 0;
  const map = new Map<number, number>();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i]) === false) {
      count += (map.get(arr[i] + k) ? 1 : 0) + (map.get(arr[i] - k) ? 1 : 0);
      map.set(arr[i], 1);
    } else if (k === 0 && map.get(arr[i]) !== -1) {
      map.set(arr[i], -1);
      count++;
    }
  }
  return count;
}
