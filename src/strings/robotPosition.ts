export function robotPosition(instructions: string): boolean {
  return instructions.length % 2 === 1
    ? false
    : instructions
        .toUpperCase()
        .split("")
        .reduce<[x: number, y: number]>(
          ([x, y], direction) => [
            x + +(direction === "R") - +(direction === "L"),
            y + +(direction === "U") - +(direction === "D"),
          ],
          [0, 0]
        )
        .join("") === "00";
}
