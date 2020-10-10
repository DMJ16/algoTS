export function singleNumberMap(nums: number[]): number {
  const map = new Map<number, number>();
  nums.forEach((num) => {
    if (map.has(num)) map.delete(num);
    else map.set(num, 1);
  });
  return [...map][0][0];
}

export function singleNumberObj(nums: number[]): number {
  const obj: { [key: string]: number } = {};
  nums.forEach((num) => {
    if (obj[num] !== undefined) delete obj[num];
    else obj[num] = 1;
  });
  return parseInt(Object.keys(obj)[0]);
}

export function singleNumberBitwise(nums: number[]): number {
  return nums.reduce((acc, val) => acc ^ val);
}
