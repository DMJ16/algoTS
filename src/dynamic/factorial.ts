export function factorialRecurse(num: number): number {
  return num <= 1 ? 1 : num * factorialRecurse(num - 1);
}

export function factorialIter(num: number): number {
  let factorial = 1;

  if (num === 0 || num === 1) {
    return factorial;
  } else {
    for (let i = num; i > 1; i--) {
      factorial *= i;
    }
    return factorial;
  }
}
