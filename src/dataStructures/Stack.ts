import { Node } from "./Node";

interface IStack<T> {
  head?: Node<T>;
  tail?: Node<T>;
  size: number;
  push(val: T): number;
  pop(): T | undefined;
}

export class Stack<T> implements IStack<T> {
  head?: Node<T>;
  tail?: Node<T>;
  size: number = 0;

  push(val: T): number {
    const newNode = new Node<T>(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return ++this.size;
  }
  pop(): T | undefined {
    if (!this.head) return undefined;
    let popped = this.head;
    if (this.head === this.tail) {
      this.tail = undefined;
    }
    this.head = this.head.next;
    this.size--;
    return popped.val;
  }
}
