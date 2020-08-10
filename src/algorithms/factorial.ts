export function factorial(n: number): number {
  if (n < 0) return 0;
  return n === 0 ? 1 : n * factorial(n - 1);
}
