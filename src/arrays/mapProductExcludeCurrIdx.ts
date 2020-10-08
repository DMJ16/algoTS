export function mapProductExcludeCurrIdx(arr: number[]): number[] {
  const result = arr.reduce((acc, val, i) => {
    if (i === 0) acc[i] = val;
    else acc[i] = acc[acc.length - 1] * val;
    return acc;
  }, [] as number[]);

  arr.reduceRight((product, val, i) => {
    if (i === 0) result[i] = product;
    else result[i] = result[i - 1] * product;
    return (product *= val);
  }, 1);

  return result;
}
