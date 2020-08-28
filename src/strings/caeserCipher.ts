export function caesarCipherEncryptor(str: string, key: number): string {
  const newChars: string[] = [];
  const newKey = key % 26;

  for (const char of str) {
    const newCharCode = char.charCodeAt(0) + newKey;
    const newChar =
      newCharCode <= "z".charCodeAt(0)
        ? String.fromCharCode(newCharCode)
        : String.fromCharCode(96 + (newCharCode % 122));
    newChars.push(newChar);
  }

  return newChars.join("");
}
