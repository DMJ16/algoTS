export function lengthOfLastWord(str: string): number {
  return str
    .trim()
    .split(" ")
    .reduce(
      (strLength, char, idx, strArr) =>
        idx === strArr.length - 1 ? char.length : strLength,
      0
    );
}

export function _lengthOfLastWord(str: string): number {
  if (str.length === 0) return 0;
  const arr = str.trim().split(" ");
  return arr[arr.length - 1].length;
}
