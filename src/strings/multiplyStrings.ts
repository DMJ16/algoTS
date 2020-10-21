export function multiplyStrings(num1: string, num2: string): string {
  return num1 === "0" || num2 === "0"
    ? "0"
    : num1
        .split("")
        .reduce<Array<number>>((resultArr, _, i) => {
          num2
            .split("")
            .forEach(
              (__, j) =>
                (resultArr[i + j] +=
                  +num1[num1.length - 1 - i] * +num2[num2.length - 1 - j])
            );
          return resultArr;
        }, Array(num1.length + num2.length - 1).fill(0))
        .map((digit, i, resultArr) => {
          if (i >= resultArr.length - 1) return digit;
          resultArr[i + 1] += Math.floor(digit / 10);
          return (digit %= 10);
        })
        .reverse()
        .join("");
}
