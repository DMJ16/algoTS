interface IQueueStack {
  push(val: number): void;
  pop(): number;
  top(): number;
  empty(): boolean;
}

// LIFO stack that uses max two queues
export class QueueStack {
  private queue: number[] = [];
  private tempQueue: number[] = [];

  push(val: number): void {
    this.queue.push(val);
  }

  pop(): number {
    while (this.queue.length > 0) {
      this.tempQueue.push(this.queue.shift()!);
    }
    const poppedVal = this.queue.shift()!;
    this.queue = this.tempQueue;
    this.tempQueue = [];
    return poppedVal;
  }

  peek(): number {
    while (this.queue.length > 1) {
      this.tempQueue.push(this.queue.shift()!);
    }
    const lastIn = this.queue[0];
    this.tempQueue.push(this.queue.shift()!);
    [this.queue, this.tempQueue] = [this.tempQueue, this.queue];
    return lastIn;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
