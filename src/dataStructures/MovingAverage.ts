interface IMovingAverage {
  next(val: number): number;
}

export class MovingAverage implements IMovingAverage {
  private numsStream: number[] = [];

  constructor(private size: number) {
    this.size = size;
  }

  next(val: number): number {
    if (this.numsStream.length === this.size) this.numsStream.shift();
    this.numsStream.push(val);
    return this.numsStream.reduce<number>(
      (avg, num, _, numsStream) => avg + num / numsStream.length,
      0
    );
  }
}
