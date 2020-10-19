export function longestCommonPrefix(strs: string[]): string {
  return strs.length === 0
    ? ""
    : strs.reduce((prefix, str) => {
        const shorterLength = (prefix: string) => (str: string) =>
          Math.min(str.length, prefix.length);

        const comparePrevPrefix = (prefix: string) => (newPrefix: string) =>
          newPrefix.length > prefix.length ? prefix : newPrefix;

        const getNewPrefix = (newPrefix: string = "", j: number = 0) => (
          prefix: string
        ) => (str: string) => {
          while (j < shorterLength(prefix)(str)) {
            if (prefix[j] !== str[j]) break;
            newPrefix += str[j];
            j++;
          }
          return comparePrevPrefix(prefix)(newPrefix);
        };

        return getNewPrefix()(prefix)(str);
      });
}
