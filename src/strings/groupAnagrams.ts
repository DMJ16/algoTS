export function groupAnagrams(arr: string[]): string[][] {
  const anagrams: { [key: string]: string[] } = {};
  for (const word of arr) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagrams) anagrams[sortedWord].push(word);
    else anagrams[sortedWord] = [word];
  }
  return Object.values(anagrams);
}
