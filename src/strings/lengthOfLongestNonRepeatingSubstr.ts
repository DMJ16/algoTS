export function lengthOfLongestNonRepeatingSubstr(str: string): number {
  return str
    .split("")
    .reduce<[substr: string, count: number]>(
      ([substr, count], char) =>
        substr.indexOf(char) > -1
          ? [
              substr.substring(substr.indexOf(char) + 1).concat(char),
              Math.max(count, substr.length),
            ]
          : [substr.concat(char), count],
      ["", 0]
    )
    .reduce<number>(
      (max, val) =>
        typeof val === "string"
          ? Math.max(max, val.length)
          : Math.max(max, val),
      -Infinity
    );
}
