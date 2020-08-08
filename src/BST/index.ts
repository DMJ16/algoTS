interface INode {
  val: number;
  left: INode | null;
  right: INode | null;
}

interface ITree<T extends INode> {
  root: T | null;
  insert(val: number): BinarySearchTree | undefined;
  search(val: number): boolean;
  DFSPreOrd(): number[] | null;
  DFSInOrd(): number[] | null;
  DFSPostOrd(): number[] | null;
  BFS(): number[] | null;
}

export class Node implements INode {
  public left: INode | null;
  public right: INode | null;
  constructor(public val: number = 0) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree implements ITree<INode> {
  public root: INode | null;
  constructor() {
    this.root = null;
  }

  insert(val: number): this | undefined {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return undefined;
      if (currentNode.val) {
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
    }
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
    const traverse = (node: Node): void => {
      if (typeof node.val === "number") result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    if (root) traverse(root);
    return result;
  }

  DFSInOrd(): number[] | null {
    if (!this.root) return null;
    const root = this.root;
    let result: number[] = [];
    const traverse = (node: Node): void => {
      if (node.left) traverse(node.left);
      if (typeof node.val === "number") result.push(node.val);
      if (node.right) traverse(node.right);
    };
    if (root) traverse(root);
    return result;
  }

  DFSPostOrd(): number[] | null {
    if (!this.root) return null;
    const root = this.root;
    let result: number[] = [];
    const traverse = (node: Node): void => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (typeof node.val === "number") result.push(node.val);
    };
    traverse(root);
    return result;
  }
}
