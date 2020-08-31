interface INode<T> {
  val: T;
  next: INode<T> | null;
}

interface IStack<T> {
  first: INode<T> | null;
  last: INode<T> | null;
  size: number;
  push(val: T): number;
  pop(): T | null;
}

export class Node<T> implements INode<T> {
  next: INode<T> | null = null;
  constructor(public val: T) {}
}

export class Stack<T> implements IStack<T> {
  first: INode<T> | null = null;
  last: INode<T> | null = null;
  size: number = 0;

  push(val: T): number {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop(): T | null {
    if (!this.first) return null;
    let popped = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return popped.val;
  }
}
