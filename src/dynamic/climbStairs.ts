interface Cache {
  [key: string]: number;
}

export function climbStairs(steps: number): number {
  const combo = [0, 1];
  let count = 2;
  while (count <= steps) {
    const nextNum = combo[0] + combo[1];
    combo[0] = combo[1];
    combo[1] = nextNum;
    count++;
  }
  return steps >= 1 ? combo[1] : combo[0];
}

export function climbStairsMemo(
  steps: number,
  combinations: Cache = { 0: 0, 1: 1 }
): number {
  if (steps in combinations) {
    return combinations[steps];
  } else {
    combinations[steps] =
      climbStairsMemo(steps - 1, combinations) +
      climbStairsMemo(steps - 2, combinations);
    return combinations[steps];
  }
}
