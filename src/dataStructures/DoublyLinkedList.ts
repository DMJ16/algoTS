interface IListNode<T> {
  val: T;
  prev?: IListNode<T>;
  next?: IListNode<T>;
}

interface IDoublyLinkedList<T> {
  head?: IListNode<T>;
  tail?: IListNode<T>;
  length: number;
  push(val: T): this;
  pop(): IListNode<T> | undefined;
  unshift(val: T): this;
  shift(): IListNode<T> | undefined;
  get(idx: number): IListNode<T> | undefined;
  set(idx: number, val: T): boolean;
  insert(idx: number, val: T): boolean;
  remove(idx: number): IListNode<T> | undefined;
  reverse(): this;
}

class ListNode<T> implements IListNode<T> {
  prev?: ListNode<T>;
  next?: ListNode<T>;
  constructor(public val: T) {}
}

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  head?: ListNode<T>;
  tail?: ListNode<T>;
  length: number = 0;

  push(val: T): this {
    const newNode = new ListNode<T>(val);
    if (this.head === undefined) {
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

  pop(): ListNode<T> | undefined {
    if (this.head === undefined) return undefined;
    const poppedNode = this.tail;
    if (poppedNode) this.tail = poppedNode.prev;
    if (this.tail) this.tail.next = undefined;
    if (poppedNode) poppedNode.prev = undefined;
    if (this.length === 1) this.head = undefined;
    this.length--;
    return poppedNode;
  }

  unshift(val: T): this {
    const newNode = new ListNode<T>(val);
    if (this.head === undefined) {
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

  shift(): ListNode<T> | undefined {
    if (this.head === undefined) return undefined;
    const shiftedNode = this.head;
    this.head = shiftedNode.next;
    if (this.head) this.head.prev = undefined;
    shiftedNode.next = undefined;
    if (this.length === 1) this.tail = undefined;
    this.length--;
    return shiftedNode;
  }

  get(idx: number): ListNode<T> | undefined {
    if (idx < 0 || idx >= this.length) return undefined;
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
    if (setNode !== undefined) {
      setNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(idx: number, val: T): boolean {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const newNode = new ListNode<T>(val);
    const oldNode = this.get(idx) as ListNode<T>;
    const prevNode = oldNode.prev;
    oldNode.prev = newNode;
    if (prevNode) prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = oldNode;
    this.length++;
    return true;
  }

  remove(idx: number): ListNode<T> | undefined {
    if (idx < 0 || idx >= this.length) return undefined;
    const removedNode = this.get(idx);
    if (removedNode !== undefined) {
      const prevNode = removedNode.prev;
      const nextNode = removedNode.next;
      if (prevNode) prevNode.next = nextNode;
      if (nextNode) nextNode.prev = prevNode;
      removedNode.next = undefined;
      removedNode.prev = undefined;
      this.length--;
      return removedNode;
    } else {
      return undefined;
    }
  }

  reverse(): this {
    if (this.length === 1) return this;
    [this.head, this.tail] = [this.tail, this.head];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode !== undefined) {
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
