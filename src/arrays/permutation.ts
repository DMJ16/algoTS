export function getPermutationRecursive(nums: number[]): number[][] {
  const permutations: number[][] = [];
  permute(nums, permutations);
  return permutations;
}

function permute(
  nums: number[],
  permutations: number[][],
  set = new Set<number>()
) {
  if (nums.length === set.size) {
    permutations.push([...set]);
    return;
  }

  for (const num of nums) {
    if (set.has(num)) continue;
    set.add(num);
    permute(nums, permutations, set);
    set.delete(num);
  }
}
export function getPermutationIter(arr: number[]): number[][] {
  const length = arr.length;
  const result: number[][] = [arr.slice(0)];

  const temp: number[] = new Array<number>(length).fill(0);
  let idx: number = 1;
  let num: number;
  let currentPerm: number;

  while (idx < length) {
    if (temp[idx] < idx) {
      num = idx % 2 && temp[idx];
      currentPerm = arr[idx];
      arr[idx] = arr[num];
      arr[num] = currentPerm;
      ++temp[idx];
      idx = 1;
      result.push(arr.slice(0));
    } else {
      temp[idx] = 0;
      ++idx;
    }
  }
  return result;
}
