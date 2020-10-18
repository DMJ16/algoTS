export function firstUniqChar(str: string): number {
  if (str.length === 1) return 0;
  const map = new Map<string, number>();
  for (const char of str) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) return i;
  }
  return -1;
}
