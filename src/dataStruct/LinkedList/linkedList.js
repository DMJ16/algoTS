class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(value) {
    this.size = 0;
    this.head = null;
    this.tail = null;

    if (value) {
      if (Array.isArray(value)) return this.fromArray(value);
      return new TypeError(value + " is not iterable");
    }

    return this;
  }

  prepend(value) {
    this.size += 1;

    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    return this;
  }

  append(value) {
    this.size += 1;

    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  fromArray(values) {
    values.forEach((value) => this.append(value));
    return this;
  }

  toArray(useNodes = false) {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(useNodes ? currentNode : currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  includes(value) {
    if (!this.head) return false;

    let isNode = value.constructor.name === "LinkedListNode";
    if (isNode) value = value.value;

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && value === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  find(callback) {
    if (Object.prototype.toString.call(callback) !== "[object Function]") {
      return new TypeError(callback + " is not a function");
    }

    if (!this.head) return undefined;

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return undefined;
  }

  delete(value, deleteOne = false) {
    if (!this.head) return false;

    let deletedNode = null;

    // If the head needs to be deleted
    while (this.head && this.head.value === value) {
      this.size -= 1;
      deletedNode = this.head;
      this.head = this.head.next;
      if (deleteOne) return true;
    }

    let currentNode = this.head;

    // If any node except the head or tail needs to be deleted
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          this.size -= 1;
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
          if (deleteOne) return true;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // If the tail needs to be deleted
    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    if (deletedNode === null) {
      return false;
    } else {
      return true;
    }
  }

  deleteHead() {
    if (!this.head) return null;

    this.size -= 1;

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  deleteTail() {
    if (this.size === 0) return false;

    if (this.size === 1) {
      if (this.head === null) {
        return false;
      } else {
        this.head = null;
        this.tail = null;
        this.size -= 1;
        return true;
      }
    }

    const deletedTail = this.tail;

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        this.size -= 1;
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  removeDup() {
    var obj = {};
    if (!this.head) {
      return this.head;
    }
    var current = this.head;
    while (current.next !== null) {
      //if the value already exists in the obj hash, change the next value
      if (obj[current.next.value]) {
        obj[current.value] = 1;
        current.next = current.next.next;
      } else {
        obj[current.value] = 1;
        current = current.next;
      }
      console.log(this);
    }
    return this.head;
  }
}

// REMOVE DUPLICATES
// var test = new LinkedList([1, 2, 3, 4, 1, 5, 3, 4, 7]);
// const kth = (list, k) => {
//   let p1 = list.head;
//   let p2 = list.head;
//   for (let i = 0;  i < k; i++) {
//    if (p2 === null) {
//      return null;
//    }
//    p2 = p2.next;
//   }

//   while (p2 !== null) {
//     p1 = p1.next;
//     p2 = p2.next;
//   }

//   return p1;
// }
// console.log(kth(test, 1));

const list1 = new LinkedList([7, 1, 6]);
const list2 = new LinkedList([5, 9, 2]);
function addTwoNumber(l1, l2) {
  let list = LinkedList(0);

  let currentNode = list;

  let sum = 0;
  let carry = 0;
}
// SUM LISTS stored in reverse order, for example:
// (7 -> 1 -> 6) + (5 -> 9 -> 2) becomes 617 + 295
// this equals 912, so return a linked list like (2 -> 1 -> 9) [you can not convert to integers]
var list1 = new LinkedList([7, 1, 6]);
var list2 = new LinkedList([5, 9, 2]);
function addTwoNumbers(l1, l2) {
  let list = new LinkedListNode(0);
  let currentNode = list;

  let sum = 0;
  let carry = 0;
  var current1 = l1.head;
  var current2 = l2.head;

  while (current1 !== null || current2 !== null || sum > 0) {
    if (current1 !== null) {
      sum += current1.value;
      current1 = current1.next;
    }

    if (current2 !== null) {
      sum += current2.value;
      current2 = current2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    currentNode.next = new LinkedListNode(sum);
    currentNode = currentNode.next;

    sum = carry;
    carry = 0;
  }

  return list.next;
}

// addTwoNumbers(list1, list2)

//reverse a singly-linked list
// var test = new LinkedList([1, 2, 3, 4, 1, 5, 4, 7])
//should return [7, 4, 5, 1, 4, 3, 2, 1]
// reverseList(test)
// function addTwoNumber (l1, l2) {
//   let node1 = l1.head;
//   let num1 = '';
//   while (node1) {
//     num1 = node1.value.toString() + num1;
//     node1 = node1.next;
//   }

//   let node2 = l2.head;
//   let num2 = '';
//   while (node2) {
//     num2 = node2.value.toString() + num2;
//     node2 = node2.next;
//   }

//   let sum = parseInt(num1) + parseInt(num2);
//   sum = sum.toString().split('');
//   console.log(sum);
//   let end = [];
//   for (let i = sum.length; i > 0; i--) {
//     end.push(sum[i-1]);
//   }
//   return new LinkedList(end);
// }

// console.log(addTwoNumber(list1, list2))
