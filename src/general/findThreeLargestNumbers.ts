export function findThreeLargestNumbers(arr: number[]): number[] {
  let threeLargest: number[] = [];

  for (const num of arr) {
    if (!threeLargest[2] || num > threeLargest[2])
      shifter(threeLargest, num, 2);
    else if (!threeLargest[1] || num > threeLargest[1])
      shifter(threeLargest, num, 1);
    else if (!threeLargest[0] || num > threeLargest[0])
      shifter(threeLargest, num, 0);
  }
  return threeLargest;
}

function shifter(arr: number[], num: number, idx: number): void {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) arr[i] = num;
    else arr[i] = arr[i + 1];
  }
}
