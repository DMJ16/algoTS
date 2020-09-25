import { Node } from "./Node";

interface IList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  push(val: T): this;
  pop(): Node<T> | null;
  shift(): Node<T> | null;
  unshift(val: T): this;
  get(idx: number): Node<T> | null;
  set(idx: number, val: T): boolean;
  insert(idx: number, val: T): boolean;
  remove(idx: number): Node<T> | null;
  reverse(): this;
}

export class LinkedList<T> implements IList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  private length: number = 0;

  get len(): number {
    return this.length;
  }

  push(val: T): this {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): Node<T> | null {
    if (this.head === null || this.tail === null) return null;
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

  shift(): Node<T> | null {
    if (this.head === null) return null;
    const shiftNode = this.head;
    this.head = this.head.next;
    shiftNode.next = null;
    if (this.length === 1) this.tail = null;
    this.length--;
    return shiftNode;
  }

  unshift(val: T): this {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx: number): Node<T> | null {
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

  remove(idx: number): Node<T> | null {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const prevNode = this.get(idx - 1) as Node<T>;
    const removeNode = prevNode.next as Node<T>;
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
