export function frequencySort(str: string): string {
  const charFrequencyArr = (str: string): [string, number][] => {
    const map = new Map<string, number>();
    str.split("").forEach((char) => map.set(char, (map.get(char) ?? 0) + 1));
    return [...map];
  };
  return charFrequencyArr(str)
    .sort((a, b) => b[1] - a[1])
    .reduce(
      (result, [char, val]) =>
        result.indexOf(char) === -1 ? result.concat(char.repeat(val)) : result,
      ""
    );
}
