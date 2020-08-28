export function isMonotonic(arr: number[]): boolean {
  if (arr.length <= 1) return true;
  let i = 0;
  let j = i + 1;

  let inc = false;
  let dec = false;

  while (j < arr.length) {
    if (arr[i] - arr[j] > 0) {
      if (inc === true) return false;
      dec = true;
    } else if (arr[i] - arr[j] < 0) {
      if (dec === true) return false;
      inc = true;
    }
    i++;
    j++;
  }

  return true;
}
