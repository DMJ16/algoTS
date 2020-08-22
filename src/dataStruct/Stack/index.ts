interface INode<T> {
  val: T;
  next?: INode<T>;
}

interface IStack<T> {
  first?: INode<T>;
  last?: INode<T>;
  size: number;
  push(val: T): number;
  pop(): T | undefined;
}

export class Node<T> implements INode<T> {
  next?: INode<T> = undefined;
  constructor(public val: T) {}
}

export class Stack<T> implements IStack<T> {
  first?: INode<T> = undefined;
  last?: INode<T> = undefined;
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
