export function atoi(str: string): number {
  const convertStrToNumber = (str: string): number => parseInt(str.trim(), 10);
  const isNegative = (num: number) => num < 0;
  const result = (str: string) => (num: number = convertStrToNumber(str)) =>
    isNegative(num)
      ? Math.max(-2147483648, num)
      : Math.min(2147483647, num) || 0;
  return result(str)();
}
