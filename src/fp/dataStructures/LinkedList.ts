interface IList<T> {
  val: T;
  next?: IList<T>;
}

export class List<T> implements IList<T> {
  next?: IList<T>;
  constructor(public val: T) {}
}

export function push<T>(list: IList<T> | undefined, val: T): IList<T> {
  const newList = new List(val);
  if (list === undefined) {
    list = newList;
  } else {
    let currentNode = list;
    while (currentNode.next !== undefined) {
      currentNode = currentNode.next;
    }
    currentNode.next = newList;
  }
  return list;
}

export function deleteNode<T>(list: IList<T> | undefined): void {
  if (list === undefined) return;
  if (list.next) {
    list.val = list.next.val;
    list.next = list.next.next;
  } else {
    list = list.next;
  }
}

export function removeNthNodeFromEnd<T>(
  head: IList<T> | undefined,
  idx: number
): IList<T> | undefined {
  if (head === undefined || idx < 0) return undefined;
  let currentNode: IList<T> | undefined = head;
  const list: IList<T>[] = [];
  while (currentNode !== undefined) {
    list.push(currentNode);
    currentNode = currentNode.next;
  }
  let i = list.length - idx;
  if (i === list.length - 1) {
    if (list.length === 1) return undefined;
    else list[i - 1].next = undefined;
  } else if (i === 0) {
    head = list[1];
  } else {
    list[i - 1].next = list[i + 1];
  }
  return head;
}

export function reverse<T>(head: IList<T> | undefined): IList<T> | undefined {
  let currentNode: IList<T> | undefined = head;
  let next: IList<T> | undefined = undefined;
  let prev: IList<T> | undefined = undefined;
  while (currentNode) {
    next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return prev;
}

export function mergeTwoSortedLists<T>(
  list1: IList<T> | undefined,
  list2: IList<T> | undefined
): IList<T> | undefined {
  if (list1 === undefined) return list2;
  if (list2 === undefined) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoSortedLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoSortedLists(list1, list2.next);
    return list2;
  }
}

export function isPalindrome<T>(list: IList<T> | undefined): boolean {
  if (list === undefined) return true;
  const arr: T[] = [];
  while (list?.val !== undefined) {
    arr.push(list.val);
    list = list.next;
  }
  return arr.every(
    (element, idx, arr) => element === arr[arr.length - idx - 1]
  );
}
