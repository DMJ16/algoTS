interface INode {
  val: number;
  left?: INode;
  right?: INode;
}

interface IBST {
  root?: INode;
  insert(val: number): IBST | undefined;
  search(val: number): boolean;
  DFSPreOrd(): number[] | undefined;
  DFSInOrd(): number[] | undefined;
  DFSPostOrd(): number[] | undefined;
  BFS(): number[] | undefined;
  invert(): this | undefined;
  validate(): boolean;
  rangeSum(left: number, right: number): number | undefined;
}

class Node implements INode {
  public left?: INode = undefined;
  public right?: INode = undefined;
  constructor(public val: number = 0) {}
}

export class BST implements IBST {
  public root?: INode = undefined;

  insert(val: number): this | undefined {
    const newNode = new Node(val);
    if (this.root === undefined) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return undefined;
      if (val < currentNode.val) {
        if (currentNode.left === undefined) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === undefined) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(val: number): boolean {
    if (this.root === undefined) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) currentNode = currentNode.left as INode;
      else if (val > currentNode.val) currentNode = currentNode.right as INode;
      else return true;
    }
    return false;
  }

  invert(): this | undefined {
    if (!this.root) return undefined;
    const traverse = (node: INode): void => {
      [node.left, node.right] = [node.right, node.left];
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return this;
  }

  BFS(): number[] | undefined {
    if (!this.root) return undefined;
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

  DFSPreOrd(): number[] | undefined {
    if (!this.root) return undefined;
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

  DFSInOrd(): number[] | undefined {
    if (!this.root) return undefined;
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

  DFSPostOrd(): number[] | undefined {
    if (!this.root) return undefined;
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
    const helper = (
      node: INode | undefined,
      min: number,
      max: number
    ): boolean => {
      if (!node) return true;
      if (node.val < min || node.val >= max) return false;
      const leftIsValid = helper(node.left, min, node.val);
      return leftIsValid && helper(node.right, node.val, max);
    };
    return helper(this.root, -Infinity, Infinity);
  }

  rangeSum(left: number, right: number): number | undefined {
    if (!this.root) return undefined;
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
