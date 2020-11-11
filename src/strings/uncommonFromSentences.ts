export function uncommonFromSentences(
  sentence1: string,
  sentence2: string
): string[] {
  const wordCountsMap = new Map<string, number>();

  [...sentence1.split(" "), ...sentence2.split(" ")].forEach((word) =>
    wordCountsMap.set(word, (wordCountsMap.get(word) ?? 0) + 1)
  );

  return [...wordCountsMap].reduce<string[]>(
    (result, [word, count]) => (count === 1 ? [...result, word] : result),
    []
  );
}
