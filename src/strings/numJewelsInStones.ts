export function numJewelsInStones(jewels: string, stones: string): number {
  return stones
    .split("")
    .reduce(
      (count, stone) => (jewels.indexOf(stone) === -1 ? count : ++count),
      0
    );
}
