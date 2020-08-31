interface INode<T> {
  val: T;
  next: INode<T> | null;
}

interface IQueue<T> {
  first: INode<T> | null;
  last: INode<T> | null;
  size: number;
  enqueue(val: T): number;
  dequeue(): T | null;
}

export class Node<T> implements INode<T> {
  next: INode<T> | null = null;
  constructor(public val: T) {}
}

export class Queue<T> implements IQueue<T> {
  first: INode<T> | null = null;
  last: INode<T> | null = null;
  size: number = 0;

  enqueue(val: T): number {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      if (this.last) this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(): T | null {
    if (!this.first) return null;
    const first = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return first.val;
  }
}
