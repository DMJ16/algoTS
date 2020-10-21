export function addBinaryStrings(a: string, b: string): string {
  if (
    a
      .concat(b)
      .split("")
      .every((digit) => digit === "0" || digit === "1") === false
  ) {
    throw new Error("one or both input strings is an invalid binary number");
  }

  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}
