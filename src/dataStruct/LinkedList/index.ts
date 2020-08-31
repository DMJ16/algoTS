interface INode<T> {
  val: T;
  next: INode<T> | null;
}

interface IList<T> {
  head: INode<T> | null;
  tail: INode<T> | null;
  push(val: T): this;
  pop(): INode<T> | null;
  shift(): INode<T> | null;
  unshift(val: T): this;
  get(idx: number): INode<T> | null;
  set(idx: number, val: T): boolean;
  insert(idx: number, val: T): boolean;
  remove(idx: number): INode<T> | null;
  reverse(): this;
}

export class Node<T> implements INode<T> {
  public next: INode<T> | null = null;
  constructor(public val: T) {}
}

export class LinkedList<T> implements IList<T> {
  public head: INode<T> | null = null;
  public tail: INode<T> | null = null;
  private length: number = 0;

  get len(): number {
    return this.length;
  }

  push(val: T): this {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): INode<T> | null {
    if (!this.head || !this.tail) return null;
    let currentNode = this.head;
    const oldTail = this.tail;
    while (currentNode.next) {
      if (currentNode.next === oldTail) break;
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
    return oldTail;
  }

  shift(): INode<T> | null {
    if (!this.head) return null;
    const shiftNode = this.head;
    this.head = this.head.next;
    shiftNode.next = null;
    if (this.length === 1) this.tail = null;
    this.length--;
    return shiftNode;
  }

  unshift(val: T): this {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx: number): INode<T> | null {
    if (idx < 0 || idx >= this.length) return null;
    let listIdx = 0;
    let currentNode = this.head;
    while (idx !== listIdx) {
      currentNode = currentNode?.next ? currentNode?.next : null;
      listIdx++;
    }
    return currentNode;
  }

  set(idx: number, val: T): boolean {
    if (idx < 0 || idx >= this.length) return false;
    let setNode = this.get(idx) as INode<T>;
    setNode.val = val;
    return true;
  }

  insert(idx: number, val: T): boolean {
    if (this.length < 0 || idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const insertNode = new Node(val);
    const prevNode = this.get(idx - 1) as INode<T>;
    insertNode.next = prevNode.next;
    prevNode.next = insertNode;
    this.length++;
    return true;
  }

  remove(idx: number): INode<T> | null {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const prevNode = this.get(idx - 1) as INode<T>;
    const removeNode = prevNode.next as INode<T>;
    prevNode.next = removeNode.next;
    removeNode.next = null;
    this.length--;
    return removeNode;
  }

  reverse(): this {
    let currentNode = this.head;
    [this.head, this.tail] = [this.tail, currentNode];
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = currentNode?.next ? currentNode?.next : null;
      if (currentNode) currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }
}
