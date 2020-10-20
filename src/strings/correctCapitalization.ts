export function correctCapitalization(word: string): boolean {
  return (
    word.toUpperCase() === word ||
    word.toLowerCase() === word ||
    `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}` === word
  );
}
