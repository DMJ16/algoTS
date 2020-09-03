import { Node } from "./Node";

interface IStack<T> {
  first?: Node<T>;
  last?: Node<T>;
  size: number;
  push(val: T): number;
  pop(): T | undefined;
}

export class Stack<T> implements IStack<T> {
  first?: Node<T>;
  last?: Node<T>;
  size: number = 0;

  push(val: T): number {
    const newNode = new Node<T>(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop(): T | undefined {
    if (!this.first) return undefined;
    let popped = this.first;
    if (this.first === this.last) {
      this.last = undefined;
    }
    this.first = this.first.next;
    this.size--;
    return popped.val;
  }
}
