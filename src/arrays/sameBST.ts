export function sameBST(arr1: number[], arr2: number[]): boolean {
  return areSameTree(arr1, arr2, 0, 0, -Infinity, Infinity);
}

function areSameTree(
  arr1: number[],
  arr2: number[],
  idx1: number,
  idx2: number,
  minVal: number,
  maxVal: number
): boolean {
  if (idx1 === -1 || idx2 === -1) return idx1 === idx2;
  if (arr1[idx1] !== arr2[idx2]) return false;

  const leftIdx1 = getIdxOfSmaller(arr1, idx1, minVal);
  const rightIdx1 = getIdxOfBigger(arr1, idx1, maxVal);
  const leftIdx2 = getIdxOfSmaller(arr2, idx2, minVal);
  const rightIdx2 = getIdxOfBigger(arr2, idx2, maxVal);

  const currentVal = arr1[idx1];
  const leftAreSame = areSameTree(
    arr1,
    arr2,
    leftIdx1,
    leftIdx2,
    minVal,
    currentVal
  );
  const rightAreSame = areSameTree(
    arr1,
    arr2,
    rightIdx1,
    rightIdx2,
    currentVal,
    maxVal
  );

  return leftAreSame && rightAreSame;
}

function getIdxOfSmaller(
  arr: number[],
  startIdx: number,
  minVal: number
): number {
  for (let i = startIdx + 1; i < arr.length; i++) {
    if (arr[i] < arr[startIdx] && arr[i] >= minVal) return i;
  }
  return -1;
}

function getIdxOfBigger(
  arr: number[],
  startIdx: number,
  maxVal: number
): number {
  for (let i = startIdx + 1; i < arr.length; i++) {
    if (arr[i] >= arr[startIdx] && arr[i] < maxVal) return i;
  }
  return -1;
}
