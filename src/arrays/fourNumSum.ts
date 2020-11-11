export function fourNumSum(arr: number[], target: number) {
  const quadMap = new Map<number, [number, number][]>();
  const result: number[][] = [];
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currentSum = arr[i] + arr[j];
      const diff = target - currentSum;
      if (quadMap.has(diff)) {
        for (const quad of quadMap.get(diff) ?? []) {
          result.push(quad.concat([arr[i], arr[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = arr[i] + arr[k];
      if (!quadMap.has(currentSum)) quadMap.set(currentSum, [[arr[k], arr[i]]]);
      else quadMap.get(currentSum)?.push([arr[k], arr[i]]);
    }
  }
  return result;
}
