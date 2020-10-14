export function thirdMax(arr: number[]): number {
  if (arr.length < 3) return Math.max(arr[0], arr[1]);
  const [thirdMax, _, max] = arr.reduce(
    (maxArr, val) => {
      if (maxArr.includes(val)) return maxArr;
      if (val > maxArr[2]) return [maxArr[1], maxArr[2], val];
      if (val > maxArr[1]) return [maxArr[1], val, maxArr[2]];
      if (val > maxArr[0]) return [val, maxArr[1], maxArr[2]];
      return maxArr;
    },
    [-Infinity, -Infinity, -Infinity]
  );
  return thirdMax !== -Infinity ? thirdMax : max;
}
