export function singleNumberMap(nums: number[]): number {
  const singleNumArr = (nums: number[]): [number, number][] => {
    const map = new Map<number, number>();
    nums.forEach((num) => (map.has(num) ? map.delete(num) : map.set(num, 1)));
    return [...map];
  };
  return singleNumArr(nums)[0][0];
}

export function singleNumberObj(nums: number[]): number {
  const singleNumArr = (nums: number[]): number[] => {
    const obj: { [key: string]: number } = {};
    nums.forEach((num) =>
      obj[num] !== undefined ? delete obj[num] : (obj[num] = 1)
    );
    return Object.keys(obj).map((key) => +key);
  };
  return singleNumArr(nums)[0];
}

export function singleNumberBitwise(nums: number[]): number {
  return nums.reduce((acc, val) => acc ^ val);
}
