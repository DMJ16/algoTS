export function longestPeak(arr: number[]): number {
  let longestPeakLength = 0;
  let i = 1;

  while (i < arr.length - 1) {
    const isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i];
    if (!isPeak) {
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && arr[leftIdx] < arr[leftIdx + 1]) {
      leftIdx--;
    }
    let rightIdx = i + 2;
    while (rightIdx < arr.length && arr[rightIdx] < arr[rightIdx - 1]) {
      rightIdx++;
    }

    const currentPeakLength = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIdx;
  }

  return longestPeakLength;
}
