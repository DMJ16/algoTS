interface Cache {
  [key: string]: number;
}

export function climbStairs(steps: number): number {
  const combo = [0, 1];
  let counter = 3;
  while (counter <= steps) {
    const newNum = combo[0] + combo[1];
    combo[0] = combo[1];
    combo[1] = newNum;
    counter++;
  }
  return steps > 0 ? combo[1] : combo[0];
}

function climbStairsMem(
  steps: number,
  combinations: Cache = { 1: 0, 2: 1 }
): number {
  if (steps in combinations) {
    return combinations[steps];
  } else {
    combinations[steps] =
      climbStairsMem(steps - 1, combinations) +
      climbStairsMem(steps - 2, combinations);
    return combinations[steps];
  }
}
