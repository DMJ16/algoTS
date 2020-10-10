export function nextGreatestLetter(letters: string[], target: string): string {
  return letters.find((letter) => letter > target) || letters[0];
}
