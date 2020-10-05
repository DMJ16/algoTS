export function containsDuplicateSet(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

export function containsDuplicateObj(nums: number[]): boolean {
  const obj: { [key: string]: number } = {};
  nums.forEach((num) => {
    if (obj[num] === undefined) obj[num] = 1;
    else obj[num]++;
  });
  return !Object.values(obj).every((val) => val === 1);
}

export function containsDuplicateMap(nums: number[]): boolean {
  const map = new Map<number, number>();
  nums.forEach((num) => {
    if (map.has(num)) map.set(num, map.get(num)! + 1);
    else map.set(num, 1);
  });
  return map.size !== nums.length;
}
