interface IMaxBinaryHeap {
  values: number[];
  insert(val: number): void;
  extractMax(): number;
  sinkDown(): void;
}

export class MaxBinaryHeap implements IMaxBinaryHeap {
  public values: number[] = [];

  insert(val: number): void {
    this.values.push(val);

    let i = this.values.length - 1;
    const newVal = this.values[i];

    while (i > 0) {
      let parentIdx = Math.floor((i - 1) / 2);
      let parent = this.values[parentIdx];
      if (newVal <= parent) break;
      [this.values[parentIdx], this.values[i]] = [newVal, parent];
      i = parentIdx;
    }
  }

  extractMax(): number {
    const max = this.values[0];
    const end = this.values.pop();
    if (end !== undefined && this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown(): void {
    let i = 0;
    const len = this.values.length;
    const temp = this.values[i];

    while (true) {
      let leftChildIdx = 2 * i + 1;
      let rightChildIdx = 2 * i + 2;
      let leftChild: number;
      let rightChild: number;
      let swap: number | undefined = undefined;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > temp) swap = leftChildIdx;
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === undefined && rightChild > temp) ||
          (swap !== undefined && rightChild > this.values[leftChildIdx])
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === undefined) break;
      [this.values[i], this.values[swap]] = [this.values[swap], temp];
      i = swap;
    }
  }
}
