interface ITreeNode {
  val: number;
  left?: ITreeNode;
  right?: ITreeNode;
  size(): number;
  height(): number;
}

interface IBST {
  root?: ITreeNode;
  insert(val: number): this | undefined;
  search(val: number): boolean;
  dfsPreOrd(): number[] | undefined;
  dfsInOrd(): number[] | undefined;
  dfsPostOrd(): number[] | undefined;
  bfs(): number[] | undefined;
  invert(): this | undefined;
  validate(): boolean;
  rangeSum(left: number, right: number): number | undefined;
  size(): number;
  height(): number;
}

class TreeNode implements ITreeNode {
  public left?: TreeNode;
  public right?: TreeNode;
  constructor(public val: number = 0) {}
  size(): number {
    return (
      1 +
      (this.left ? this.left.size() : 0) +
      (this.right ? this.right.size() : 0)
    );
  }
  height(): number {
    return Math.max(
      this.right ? this.right.height() + 1 : 0,
      this.left ? this.left.height() + 1 : 0
    );
  }
}

export class BST implements IBST {
  public root?: TreeNode;

  size(): number {
    if (!this.root) return 0;
    return this.root.size();
  }

  height(): number {
    if (!this.root) return 0;
    return this.root.height();
  }

  insert(val: number): this | undefined {
    const newNode = new TreeNode(val);
    if (!this.root) {
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
    return undefined;
  }

  search(val: number): boolean {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) currentNode = currentNode.left as TreeNode;
      else if (val > currentNode.val)
        currentNode = currentNode.right as TreeNode;
      else return true;
    }
    return false;
  }

  invert(): this | undefined {
    if (!this.root) return undefined;
    const traverse = (node: TreeNode): void => {
      [node.left, node.right] = [node.right, node.left];
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return this;
  }

  bfs(): number[] | undefined {
    let node = this.root;
    if (!node) return undefined;
    let q: TreeNode[] = [];
    let data: number[] = [];
    q.push(node);

    while (q.length) {
      node = q.shift();
      if (node) data.push(node.val);
      if (node?.left) q.push(node.left);
      if (node?.right) q.push(node.right);
    }

    return data;
  }

  dfsPreOrd(): number[] | undefined {
    if (!this.root) return undefined;
    const root = this.root;
    let result: number[] = [];
    const traverse = (node: TreeNode): void => {
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(root);
    return result;
  }

  dfsInOrd(): number[] | undefined {
    if (!this.root) return undefined;
    const root = this.root;
    let result: number[] = [];
    const traverse = (node: TreeNode): void => {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(root);
    return result;
  }

  dfsPostOrd(): number[] | undefined {
    if (!this.root) return undefined;
    const root = this.root;
    let result: number[] = [];
    const traverse = (node: TreeNode): void => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    };
    traverse(root);
    return result;
  }

  dfsPreOrdIter(): number[] | undefined {
    let currentNode = this.root;
    if (!currentNode) return undefined;
    const stack: TreeNode[] = [];
    const result: number[] = [];
    stack.push(currentNode);
    while (stack.length > 0) {
      currentNode = stack.pop();
      if (currentNode) result.push(currentNode.val);
      if (currentNode?.right) stack.push(currentNode.right);
      if (currentNode?.left) stack.push(currentNode.left);
    }
    return result;
  }

  dfsInOrdIter(): number[] | undefined {
    let currentNode = this.root;
    if (!currentNode) return undefined;
    const stack: TreeNode[] = [];
    const result: number[] = [];

    while (stack.length > 0 || currentNode !== undefined) {
      if (currentNode !== undefined) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      } else {
        currentNode = stack.pop();
        if (currentNode) result.push(currentNode.val);
        currentNode = currentNode?.right;
      }
    }
    return result;
  }

  dfsPostOrdIter(): number[] | undefined {
    let currentNode = this.root;
    if (!currentNode) return undefined;
    const stack: TreeNode[] = [];
    const result: number[] = [];
    stack.push(currentNode);
    while (stack.length > 0) {
      currentNode = stack.pop();
      if (currentNode) result.unshift(currentNode.val);
      if (currentNode?.left) stack.push(currentNode.left);
      if (currentNode?.right) stack.push(currentNode.right);
    }
    return result;
  }

  validate(): boolean {
    const helper = (
      node: TreeNode | undefined,
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
    const traverse = (node: TreeNode): void => {
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