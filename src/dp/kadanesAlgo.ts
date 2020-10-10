export function kadanesAlgo(arr: number[]): number {
  let maxAtIdx = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    maxAtIdx = Math.max(num, maxAtIdx + num);
    currentMax = Math.max(currentMax, maxAtIdx);
  }

  return currentMax;
}

export function kadanesAlgoFP(arr: number[]): number {
  const [_, max] = arr.reduce(
    ([maxAtIdx, currentMax], val, i) => {
      if (i === 0) return [maxAtIdx, currentMax];
      maxAtIdx = Math.max(val, val + maxAtIdx);
      currentMax = Math.max(currentMax, maxAtIdx);
      return [maxAtIdx, currentMax];
    },
    [arr[0], arr[0]]
  );
  return max;
}
