interface INode {
  val: number;
  left: INode | null;
  right: INode | null;
}

interface IBST {
  root: INode | null;
  insert(val: number): IBST | null;
  search(val: number): boolean;
  DFSPreOrd(): number[] | null;
  DFSInOrd(): number[] | null;
  DFSPostOrd(): number[] | null;
  BFS(): number[] | null;
  invert(): this | null;
  validate(): boolean;
  rangeSum(left: number, right: number): number | null;
}

class Node implements INode {
  public left: INode | null = null;
  public right: INode | null = null;
  constructor(public val: number = 0) {}
}

export class BST implements IBST {
  public root: INode | null = null;

  insert(val: number): this | null {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return null;
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  search(val: number): boolean {
    if (this.root === null) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) currentNode = currentNode.left as INode;
      else if (val > currentNode.val) currentNode = currentNode.right as INode;
      else return true;
    }
    return false;
  }

  invert(): this | null {
    if (!this.root) return null;
    const traverse = (node: INode): void => {
      [node.left, node.right] = [node.right, node.left];
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return this;
  }

  BFS(): number[] | null {
    if (!this.root) return null;
    let q: INode[] = [];
    let data: number[] = [];
    let node = this.root;
    q.push(node);

    while (q.length) {
      node = q.shift() as INode;
      data.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    return data;
  }

  DFSPreOrd(): number[] | null {
    if (!this.root) return null;
    const root = this.root;
    let result: number[] = [];
    const traverse = (node: INode): void => {
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(root);
    return result;
  }

  DFSInOrd(): number[] | null {
    if (!this.root) return null;
    const root = this.root;
    let result: number[] = [];
    const traverse = (node: INode): void => {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(root);
    return result;
  }

  DFSPostOrd(): number[] | null {
    if (!this.root) return null;
    const root = this.root;
    let result: number[] = [];
    const traverse = (node: INode): void => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    };
    traverse(root);
    return result;
  }

  validate(): boolean {
    const helper = (node: INode | null, min: number, max: number): boolean => {
      if (!node) return true;
      if (node.val < min || node.val >= max) return false;
      const leftIsValid = helper(node.left, min, node.val);
      return leftIsValid && helper(node.right, node.val, max);
    };
    return helper(this.root, -Infinity, Infinity);
  }

  rangeSum(left: number, right: number): number | null {
    if (!this.root) return null;
    let sum = 0;
    const traverse = (node: INode): void => {
      if (node) {
        if (node.left && left < node.val) traverse(node.left);
        if (node.val >= left && node.val <= right) sum += node.val;
        if (node.right && right > node.val) traverse(node.right);
      }
    };
    traverse(this.root);
    return sum;
  }
}
