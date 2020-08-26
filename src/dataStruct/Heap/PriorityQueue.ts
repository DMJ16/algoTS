interface INode<T> {
  val: T;
  priority: number;
  time: Date;
}

interface IPriorityQueue<T> {
  values: Node<T>[];
  enqueue(val: T, priority: number): void;
  dequeue(): Node<T>;
  sinkDown(): void;
}

class Node<T> implements INode<T> {
  public time = new Date();
  constructor(public val: T, public priority: number) {}
}

export class PriorityQueue<T> implements IPriorityQueue<T> {
  public values: Node<T>[] = [];

  enqueue(val: T, priority: number): void {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let i = this.values.length - 1;
    const node = this.values[i];

    while (i > 0) {
      let parentIdx = Math.floor((i - 1) / 2);
      let parent = this.values[parentIdx];
      if (node.priority >= parent.priority) break;
      [this.values[i], this.values[parentIdx]] = [parent, node];
      i = parentIdx;
    }
  }

  dequeue(): Node<T> {
    const min = this.values[0];
    const end = this.values.pop();
    if (end instanceof Node && this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown(): void {
    let i = 0;
    const len = this.values.length;
    const temp = this.values[i];

    while (true) {
      let leftChildIdx = 2 * i + 1;
      let rightChildIdx = 2 * i + 2;
      let leftChild: Node<T>;
      let rightChild: Node<T>;
      let swap: number | undefined = undefined;
      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < temp.priority) swap = leftChildIdx;
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === undefined && rightChild.priority < temp.priority) ||
          (swap !== undefined &&
            rightChild.priority < this.values[leftChildIdx].priority)
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
