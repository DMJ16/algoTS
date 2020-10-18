export function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;
  let left = 0;
  let right = needle.length;

  while (right <= haystack.length) {
    if (haystack.slice(left, right) === needle) return left;
    left++;
    right++;
  }

  return -1;
}

export function strStrIdxOf(haystack: string, needle: string): number {
  return needle === "" ? 0 : haystack.indexOf(needle);
}
