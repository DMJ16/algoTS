export function specialPythagoreanTriplet(): number {
  const sum = 1000;
  for (let a = 1; a <= sum / 3; a++) {
    for (let b = a + 1; b <= sum / 2; b++) {
      let c = sum - a - b;
      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) return a * b * c;
    }
  }
  return -1;
}
