export function kmpSearch(str: string, substr: string): number {
  let count = 0;
  let i = 0;
  let j = substr.length;

  while (j <= str.length) {
    if (str.slice(i, j) === substr) count++;
    i++;
    j++;
  }

  return count;
}
