export function threeNumMaxProduct(arr: number[]): number {
  if (arr.length === 0) return 0;
  if (arr.length <= 3) return arr.reduce((product, val) => product * val);
  arr.sort((a, b) => b - a);
  return Math.max(
    arr[0] * arr[1] * arr[2],
    arr[0] * arr[arr.length - 2] * arr[arr.length - 1]
  );
}

export function threeNumMaxProductNoSort(arr: number[]): number {
  if (arr.length === 0) return 0;
  if (arr.length <= 3) return arr.reduce((product, val) => product * val);
  const result = arr.reduce(
    (arrMinMax, val) => {
      if (val > arrMinMax[0]) {
        [arrMinMax[0], arrMinMax[1], arrMinMax[2]] = [
          val,
          arrMinMax[0],
          arrMinMax[1],
        ];
      } else if (val > arrMinMax[1]) {
        [arrMinMax[0], arrMinMax[1], arrMinMax[2]] = [
          arrMinMax[0],
          val,
          arrMinMax[1],
        ];
      } else if (val > arrMinMax[2]) {
        [arrMinMax[0], arrMinMax[1], arrMinMax[2]] = [
          arrMinMax[0],
          arrMinMax[1],
          val,
        ];
      }
      if (val < arrMinMax[3]) {
        [arrMinMax[3], arrMinMax[4]] = [val, arrMinMax[3]];
      } else if (val < arrMinMax[4]) {
        [arrMinMax[3], arrMinMax[4]] = [arrMinMax[3], val];
      }

      return arrMinMax;
    },
    [-Infinity, -Infinity, -Infinity, Infinity, Infinity]
  );

  return Math.max(
    result[0] * result[1] * result[2],
    result[0] * result[3] * result[4]
  );
}
