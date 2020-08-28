export function flatten(arr: unknown): number[] {
  let flatArr: number[] = [];
  for (const element of arr as []) {
    if (Array.isArray(element)) {
      flatArr = flatArr.concat(flatten(element));
    } else flatArr.push(element);
  }
  return flatArr;
}
