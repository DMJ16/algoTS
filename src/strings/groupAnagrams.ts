export function groupAnagrams(words: string[]): string[][] {
  const anagrams: { [key: string]: string[] } = {};
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagrams) anagrams[sortedWord].push(word);
    else anagrams[sortedWord] = [word];
  }
  return Object.values(anagrams);
}

export function groupAnagramsMap(words: string[]): string[][] {
  const anagrams = new Map<string, string[]>();
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (anagrams.has(sortedWord)) anagrams.get(sortedWord)?.push(word);
    else anagrams.set(sortedWord, [word]);
  }
  return [...anagrams.values()];
}
