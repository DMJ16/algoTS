export function romanToInt(romanNumeral: string): number {
  const numerals: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (
    romanNumeral.length === 0 ||
    romanNumeral.split("").every((numeral) => numeral in numerals) === false
  ) {
    throw new Error("invalid roman numeral");
  }
  return romanNumeral
    .split("")
    .reduce(
      (num, currentNumeral, idx, romanNumeral) =>
        numerals[currentNumeral] < numerals[romanNumeral[idx + 1]]
          ? (num -= numerals[currentNumeral])
          : (num += numerals[currentNumeral]),
      0
    );
}
