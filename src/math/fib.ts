export function fib(n: number): number {
  if (n <= 0) return 0;
  return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
}
