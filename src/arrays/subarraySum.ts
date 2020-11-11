export function subarraySum(nums: number[], k: number): number {
  const numsMap = new Map([[0, 1]]);
  const [count] = nums.reduce<number[]>(
    ([count, sum], num) => {
      sum += num;
      count += numsMap.get(sum - k) ?? 0;
      numsMap.set(sum, (numsMap.get(sum) ?? 0) + 1);
      return [count, sum];
    },
    [0, 0]
  );
  return count;
}
