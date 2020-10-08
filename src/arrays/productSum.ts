type SpecialArray = Array<number | SpecialArray>;
export function productSum(arr: SpecialArray, multiplier = 1): number {
  let sum = 0;
  for (const item of arr) {
    if (Array.isArray(item)) sum += productSum(item, multiplier + 1);
    else sum += item;
  }
  return sum * multiplier;
}
