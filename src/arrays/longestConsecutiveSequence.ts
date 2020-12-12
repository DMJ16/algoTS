export const longestConsecutiveSequence = (nums: number[]) => {
  const set = new Set<number>(nums);
  let length = 0;
  set.forEach((num, idx) => {
    let newLength = 0;
    let currentNum = num;
    if (!set.has(currentNum - 1)) {
      newLength++;
      while (set.has(currentNum + 1)) {
        set.delete(currentNum + 1);
        newLength++;
        currentNum++;
      }
      length = Math.max(length, newLength);
    }
  });
  return length;
};
