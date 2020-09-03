import { Node } from "./Node";

interface IQueue<T> {
  first?: Node<T>;
  last?: Node<T>;
  size: number;
  enqueue(val: T): number;
  dequeue(): T | undefined;
}

export class Queue<T> implements IQueue<T> {
  first?: Node<T>;
  last?: Node<T>;
  size: number = 0;

  enqueue(val: T): number {
    const newNode = new Node<T>(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      if (this.last) this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(): T | undefined {
    if (!this.first) return undefined;
    const first = this.first;
    if (this.first === this.last) {
      this.last = undefined;
    }
    this.first = this.first.next;
    this.size--;
    return first.val;
  }
}
