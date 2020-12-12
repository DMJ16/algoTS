export const findDuplicate = (nums: number[]) => {
  if (nums.length == 2) {
    return nums[0];
  }

  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow == fast) {
      break;
    }
  }

  slow = nums[0];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
