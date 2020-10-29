export function isNumPalindrome(num: number): boolean {
  if (num < 0) return false;
  let rev = 0;
  for (let i = num; i >= 1; i = Math.floor(i / 10)) {
    rev = rev * 10 + (i % 10);
  }
  return rev === num;
}

export function _isNumPalindrome(num: number): boolean {
  const numStr = num.toString();
  let left = 0;
  let right = numStr.length - 1;
  while (left < right) {
    if (numStr[left] !== numStr[right]) return false;
    left++;
    right--;
  }
  return true;
}
