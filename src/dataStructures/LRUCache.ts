export class LRUCache {
  cache: { [key: string]: LRUNode } = {};
  capacity: number;
  currentSize: number = 0;
  mostRecentList: LRULinkedList = new LRULinkedList();
  constructor(capacity: number) {
    this.capacity = capacity <= 1 ? 1 : capacity;
  }

  insertKeyValuePair(key: string, value: number): void {
    if (!(key in this.cache)) {
      if (this.currentSize === this.capacity) this.removeLeastRecent();
      else this.currentSize++;
      this.cache[key] = new LRUNode(key, value);
    } else {
      this.replaceKey(key, value);
    }
    this.updateMostRecent(this.cache[key]);
  }

  getValueFromKey(key: string): number | null {
    if (!(key in this.cache)) return null;
    this.updateMostRecent(this.cache[key]);
    return this.cache[key].value;
  }

  getMostRecentKey() {
    if (this.mostRecentList.head === null) return null;
    return this.mostRecentList.head.key;
  }

  removeLeastRecent(): void {
    const keyToRemove = this.mostRecentList.tail!.key;
    this.mostRecentList.removeTail();
    delete this.cache[keyToRemove];
  }

  updateMostRecent(node: LRUNode): void {
    this.mostRecentList.setHead(node);
  }

  replaceKey(key: string, value: number): void {
    if (!(key in this.cache)) {
      throw new Error("Key not found in cache");
    }
    this.cache[key].value = value;
  }
}

class LRULinkedList {
  head: LRUNode | null = null;
  tail: LRUNode | null = null;

  setHead(node: LRUNode): void {
    if (this.head === node) {
      return;
    } else if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      this.tail.prev = node;
      this.head = node;
      this.head.next = this.tail;
    } else {
      if (this.tail === node) this.removeTail();
      node.removeBindings();
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  removeTail(): void {
    if (this.tail === null) return;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
  }
}

class LRUNode {
  key: string;
  value: number;
  next: LRUNode | null = null;
  prev: LRUNode | null = null;
  constructor(key: string, value: number) {
    this.key = key;
    this.value = value;
  }

  removeBindings(): void {
    if (this.prev !== null) this.prev.next = this.next;
    if (this.next !== null) this.next.prev = this.prev;
    this.prev = null;
    this.next = null;
  }
}
