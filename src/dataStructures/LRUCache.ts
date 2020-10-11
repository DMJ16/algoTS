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

  getValueFromKey(key: string): number | undefined {
    if (!(key in this.cache)) return undefined;
    this.updateMostRecent(this.cache[key]);
    return this.cache[key].value;
  }

  getMostRecentKey() {
    if (this.mostRecentList.head === undefined) return undefined;
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
  head: LRUNode | undefined = undefined;
  tail: LRUNode | undefined = undefined;

  setHead(node: LRUNode): void {
    if (this.head === node) {
      return;
    } else if (this.head === undefined) {
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
    if (this.tail === undefined) return;
    if (this.tail === this.head) {
      this.head = undefined;
      this.tail = undefined;
      return;
    }
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = undefined;
  }
}

class LRUNode {
  key: string;
  value: number;
  next: LRUNode | undefined = undefined;
  prev: LRUNode | undefined = undefined;
  constructor(key: string, value: number) {
    this.key = key;
    this.value = value;
  }

  removeBindings(): void {
    if (this.prev !== undefined) this.prev.next = this.next;
    if (this.next !== undefined) this.next.prev = this.prev;
    this.prev = undefined;
    this.next = undefined;
  }
}
