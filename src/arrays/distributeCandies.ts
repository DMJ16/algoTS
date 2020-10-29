export function distributeCandies(candies: number[]): number {
  return Math.min(new Set(candies).size, candies.length / 2);
}
