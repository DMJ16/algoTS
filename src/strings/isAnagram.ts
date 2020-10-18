export function isAnagram(str: string, anagram: string): boolean {
  return str.split("").sort().join("") === anagram.split("").sort().join("");
}

export function isAnagramMap(str: string, anagram: string): boolean {
  if (str.length !== anagram.length) return false;
  const map = new Map<string, number>();
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const count = map.has(char) ? map.get(char)! + 1 : 1;
    map.set(char, count);
  }
  for (let j = 0; j < anagram.length; j++) {
    const char = anagram.charAt(j);
    if (map.has(char) === false) return false;
    const count = (map.get(char) ?? 0) - 1;
    if (count === 0) {
      map.delete(char);
      continue;
    }
    map.set(char, count);
  }
  return map.size === 0;
}
