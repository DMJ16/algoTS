export function minSubarrayLen(arr: number[], targ: number): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = Infinity;

  while (left < arr.length) {
    if (sum >= targ) {
      minLength = Math.min(minLength, right - left);
      sum -= arr[left];
      left++;
    } else if (sum < targ && right < arr.length) {
      sum += arr[right];
      right++;
    } else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
