import { Node } from "./Node";

interface IStack<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;
  push(val: T): number;
  pop(): T | null;
}

export class Stack<T> implements IStack<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
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
  pop(): T | null {
    if (!this.head) return null;
    let popped = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return popped.val;
  }
}
