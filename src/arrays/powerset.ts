export function powerset(arr: number[]): number[][] {
  const subsets: number[][] = [[]];
  for (const el of arr) {
    const len = subsets.length;
    for (let i = 0; i < len; i++) {
      const currentSet = subsets[i];
      subsets.push(currentSet.concat(el));
    }
  }
  return subsets;
}
