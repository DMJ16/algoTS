import { Node } from "./Node";

interface IQueue<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;
  enqueue(val: T): number;
  dequeue(): T | null;
}

export class Queue<T> implements IQueue<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
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

  dequeue(): T | null {
    if (!this.head) return null;
    const head = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return head.val;
  }
}
