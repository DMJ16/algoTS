export function fizzBuzz(n: number): string[] {
  return Array.from(new Array<string>(n), (_, idx) =>
    (idx + 1) % 15 === 0
      ? "FizzBuzz"
      : (idx + 1) % 5 === 0
      ? "Buzz"
      : (idx + 1) % 3 === 0
      ? "Fizz"
      : `${idx + 1}`
  );
}

export function _fizzBuzz(n: number): string[] {
  return new Array<string>(n)
    .fill("1")
    .map((_, idx) =>
      (idx + 1) % 15 === 0
        ? "FizzBuzz"
        : (idx + 1) % 5 === 0
        ? "Buzz"
        : (idx + 1) % 3 === 0
        ? "Fizz"
        : `${idx + 1}`
    );
}

export function __fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i < n + 1; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(`${i}`);
  }

  return result;
}
