export function shuffleInPlace<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;
  for (let i = 0; i < arr.length; i++) {
    const randomIdx = Math.floor(Math.random() * (arr.length - 1 - i + 1)) + i;
    [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]];
  }
  return arr;
}
