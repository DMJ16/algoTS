export function smallestDifference(arr1: number[], arr2: number[]): number[] {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    let num1 = arr1[i];
    let num2 = arr2[j];
    if (num1 < num2) {
      current = num2 - num1;
      i++;
    } else if (num2 < num1) {
      current = num1 - num2;
      j++;
    } else {
      return [num1, num2];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [num1, num2];
    }
  }
  return smallestPair;
}
