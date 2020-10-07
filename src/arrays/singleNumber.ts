export function singleNumber(nums: number[]): number {
  const map = new Map<number, number>();
  nums.forEach((num) => {
    if (map.has(num)) map.set(num, map.get(num)! + 1);
    else map.set(num, 1);
  });
  const [[num, _]] = [...map].filter(([_, count]) => count === 1);
  return num;
}

export function singleNumberBitwise(nums: number[]): number {
  return nums.reduce((acc, val) => acc ^ val);
}
