export const sortColors = (colors: number[]): void => {
  const swap = (i: number, j: number, arr: number[]): void => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  let left = 0;
  let right = colors.length - 1;
  let i = 0;
  while (i <= right) {
    if (colors[i] == 0) {
      swap(i, left, colors);
      left++;
    }
    if (colors[i] == 2) {
      swap(i, right, colors);
      right--;
      i--;
    }
    i++;
  }
};
