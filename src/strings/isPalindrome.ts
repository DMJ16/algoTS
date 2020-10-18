export function isPalindrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

export function isPalindromeWithSpaces(str: string): boolean {
  str = str.replace(/[^0-9a-zA-Z]+/gim, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

export function isPalindromeWithSpacesFP(str: string): boolean {
  str = str.replace(/[^0-9a-zA-Z]+/gim, "").toLowerCase();
  const reverseStr = (str: string): string => [...str].reverse().join("");

  return (
    str.substr(0, Math.floor(str.length / 2)) ===
    reverseStr(str.substr(Math.ceil(str.length / 2)))
  );
}
