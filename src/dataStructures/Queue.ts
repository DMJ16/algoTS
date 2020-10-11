import { Node } from "./Node";

interface IQueue<T> {
  head?: Node<T>;
  tail?: Node<T>;
  size: number;
  enqueue(val: T): number;
  dequeue(): T | undefined;
}

export class Queue<T> implements IQueue<T> {
  head?: Node<T>;
  tail?: Node<T>;
  size: number = 0;

  enqueue(val: T): number {
    const newNode = new Node<T>(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.size;
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;
    const head = this.head;
    if (this.head === this.tail) this.tail = undefined;
    this.head = this.head.next;
    this.size--;
    return head.val;
  }
}
