export function longestPalindromicSubstring(str: string): string {
  let currentLongest = [0, 1];
  for (let i = 1; i < str.length; i++) {
    const odd = getLongestPalindrome(str, i - 1, i + 1);
    const even = getLongestPalindrome(str, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return str.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindrome(
  str: string,
  leftIdx: number,
  rightIdx: number
): [number, number] {
  while (leftIdx >= 0 && rightIdx < str.length) {
    if (str[leftIdx] !== str[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
