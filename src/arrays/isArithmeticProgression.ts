export function isArithmeticProgression(arr: number[]): boolean {
  if (arr.length === 2) return true;
  const sorted = arr.sort((a, b) => a - b);
  const diff = sorted[0] - sorted[1];
  for (let i = 2; i < sorted.length; i++) {
    if (arr[i - 1] - arr[i] !== diff) return false;
  }
  return true;
}
