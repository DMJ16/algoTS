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
