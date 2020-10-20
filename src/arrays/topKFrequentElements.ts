export function topKFrequentElements(nums: number[], k: number): number[] {
  if (nums.length === 0 || k < 1 || k > nums.length)
    throw new Error(
      "array is empty or k is less than or greater than array length"
    );
  const numFrequencyArr = (nums: number[]): [number, number][] => {
    const map = new Map<number, number>();
    nums.forEach((num) => map.set(num, (map.get(num) ?? 0) + 1));
    return [...map];
  };
  return numFrequencyArr(nums)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key]) => key);
}
