interface IListNode<T> {
  val: T;
  prev: IListNode<T> | null;
  next: IListNode<T> | null;
}

interface IDoublyLinkedList<T> {
  head: IListNode<T> | null;
  tail: IListNode<T> | null;
  length: number;
  push(val: T): this;
  pop(): IListNode<T> | null;
  unshift(val: T): this;
  shift(): IListNode<T> | null;
  get(idx: number): IListNode<T> | null;
  set(idx: number, val: T): boolean;
  insert(idx: number, val: T): boolean;
  remove(idx: number): IListNode<T> | null;
  reverse(): this;
}

class ListNode<T> implements ListNode<T> {
  prev: ListNode<T> | null = null;
  next: ListNode<T> | null = null;
  constructor(public val: T) {}
}

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length: number = 0;

  push(val: T): this {
    const newNode = new ListNode<T>(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): ListNode<T> | null {
    if (this.head === null) return null;
    const poppedNode = this.tail;
    if (poppedNode) this.tail = poppedNode.prev;
    if (this.tail) this.tail.next = null;
    if (poppedNode) poppedNode.prev = null;
    if (this.length === 1) this.head = null;
    this.length--;
    return poppedNode;
  }

  unshift(val: T): this {
    const newNode = new ListNode<T>(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift(): ListNode<T> | null {
    if (this.head === null) return null;
    const shiftedNode = this.head;
    this.head = shiftedNode.next;
    if (this.head) this.head.prev = null;
    shiftedNode.next = null;
    if (this.length === 1) this.tail = null;
    this.length--;
    return shiftedNode;
  }

  get(idx: number): ListNode<T> | null {
    if (idx < 0 || idx >= this.length) return null;
    let currentNode = this.head;
    let listIdx = 0;
    while (idx !== listIdx && currentNode) {
      currentNode = currentNode.next;
      listIdx++;
    }
    return currentNode;
  }

  set(idx: number, val: T): boolean {
    if (idx < 0 || idx >= this.length) return false;
    const setNode = this.get(idx);
    if (setNode) {
      setNode.val = val;
      return true;
    } else return false;
  }

  insert(idx: number, val: T): boolean {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const newNode = new ListNode<T>(val);
    const oldNode = this.get(idx)!;
    const prevNode = oldNode.prev;
    if (oldNode) oldNode.prev = newNode;
    if (prevNode) prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = oldNode;
    this.length++;
    return true;
  }

  remove(idx: number): ListNode<T> | null {
    if (idx < 0 || idx >= this.length) return null;
    const removedNode = this.get(idx);
    if (removedNode) {
      const prevNode = removedNode.prev;
      const nextNode = removedNode.next;
      if (prevNode) prevNode.next = nextNode;
      if (nextNode) nextNode.prev = prevNode;
      removedNode.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  reverse(): this {
    if (this.length === 1) return this;
    [this.head, this.tail] = [this.tail, this.head];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode) {
        [currentNode.next, currentNode.prev] = [
          currentNode.prev,
          currentNode.next,
        ];
        currentNode = currentNode.next;
      }
    }
    return this;
  }
}
