export function threeNumSum(arr: number[], targetSum: number): number[][] {
  arr.sort((a, b) => a - b);
  const triplets: number[][] = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === targetSum) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}
