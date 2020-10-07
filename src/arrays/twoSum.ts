export function twoSum(arr: number[], targ: number): number[] | null {
  const map = new Map<number, number>();
  for (const [i, num] of arr.entries()) {
    if (map.has(num)) {
      const idx = map.get(num);
      if (idx !== undefined) return [idx, i];
    }
    map.set(targ - num, i);
  }
  return null;
}
