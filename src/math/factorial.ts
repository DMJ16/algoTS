export function factorialRecurse(num: number): number {
  if (num < 0) return 0;
  return num === 0 ? 1 : num * factorialRecurse(num - 1);
}

export function factorialIter(num: number) {
  let product = 1;

  for (let i = 1; i <= num; i++) {
    if (num < 2) return 1;
    product *= i;
  }

  return product;
}
