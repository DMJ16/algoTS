export function reverseStr(str: string): string {
  return [...str].reverse().join("");
}

export function reverseInt(num: number): number {
  const isNegative = num < 0;
  num = parseInt(num.toString().split("").reverse().join(""));
  const revNum = isNegative ? -num : num;
  const isRevNumOutside32BitIntRange =
    (isNegative && Math.abs(revNum) > Math.pow(2, 31)) ||
    (!isNegative && Math.abs(revNum) > Math.pow(2, 31) - 1);
  return isRevNumOutside32BitIntRange ? 0 : revNum;
}

export function reverseIntFP(num: number): number {
  const isNegative = (x: number): boolean => x < 0;
  const signNum = (num: number) => (x: number): number =>
    isNegative(num) ? -x : x;
  const isRevNumOutside32BitIntRange = (num: number) => (x: number): boolean =>
    (isNegative(num) && Math.abs(x) > Math.pow(2, 31)) ||
    (!isNegative(num) && Math.abs(x) > Math.pow(2, 31) - 1);

  return isRevNumOutside32BitIntRange(num)(
    parseInt(num.toString().split("").reverse().join(""))
  )
    ? 0
    : signNum(num)(parseInt(num.toString().split("").reverse().join("")));
}
