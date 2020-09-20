import { Node } from "./Node";

interface IList<T> {
  head?: Node<T>;
  tail?: Node<T>;
  push(val: T): this;
  pop(): Node<T> | undefined;
  shift(): Node<T> | undefined;
  unshift(val: T): this;
  get(idx: number): Node<T> | undefined;
  set(idx: number, val: T): boolean;
  insert(idx: number, val: T): boolean;
  remove(idx: number): Node<T> | undefined;
  reverse(): this;
}

export class LinkedList<T> implements IList<T> {
  public head?: Node<T>;
  public tail?: Node<T>;
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

  pop(): Node<T> | undefined {
    if (!this.head || !this.tail) return undefined;
    let currentNode = this.head;
    const oldTail = this.tail;
    while (currentNode.next) {
      if (currentNode.next === oldTail) break;
      currentNode = currentNode.next;
    }
    currentNode.next = undefined;
    this.tail = currentNode;
    this.length--;
    return oldTail;
  }

  shift(): Node<T> | undefined {
    if (!this.head) return undefined;
    const shiftNode = this.head;
    this.head = this.head.next;
    shiftNode.next = undefined;
    if (this.length === 1) this.tail = undefined;
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

  get(idx: number): Node<T> | undefined {
    if (idx < 0 || idx >= this.length) return undefined;
    let listIdx = 0;
    let currentNode = this.head;
    while (idx !== listIdx) {
      currentNode = currentNode?.next ? currentNode?.next : undefined;
      listIdx++;
    }
    return currentNode;
  }

  set(idx: number, val: T): boolean {
    if (idx < 0 || idx >= this.length) return false;
    let setNode = this.get(idx) as Node<T>;
    setNode.val = val;
    return true;
  }

  insert(idx: number, val: T): boolean {
    if (this.length < 0 || idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const insertNode = new Node(val);
    const prevNode = this.get(idx - 1) as Node<T>;
    insertNode.next = prevNode.next;
    prevNode.next = insertNode;
    this.length++;
    return true;
  }

  remove(idx: number): Node<T> | undefined {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const prevNode = this.get(idx - 1) as Node<T>;
    const removeNode = prevNode.next as Node<T>;
    prevNode.next = removeNode.next;
    removeNode.next = undefined;
    this.length--;
    return removeNode;
  }

  reverse(): this {
    let currentNode = this.head;
    [this.head, this.tail] = [this.tail, currentNode];
    let next = undefined;
    let prev = undefined;
    for (let i = 0; i < this.length; i++) {
      next = currentNode?.next ? currentNode?.next : undefined;
      if (currentNode) currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }
}
