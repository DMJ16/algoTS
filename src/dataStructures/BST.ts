interface ITreeNode {
  val: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
  size(): number;
  height(): number;
}

interface IBST {
  root: ITreeNode | null;
  insert(val: number): this | null;
  search(val: number): boolean;
  dfsPreOrder(): number[] | null;
  dfsInOrder(): number[] | null;
  dfsPostOrder(): number[] | null;
  bfs(): number[] | null;
  invert(): this | null;
  validate(): boolean;
  rangeSum(left: number, right: number): number | null;
  size(): number;
  height(): number;
  remove(val: number): ITreeNode | null;
}

class TreeNode implements ITreeNode {
  left: TreeNode | null = null;
  right: TreeNode | null = null;
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
  root: TreeNode | null = null;

  size(): number {
    if (this.root === null) return 0;
    return this.root.size();
  }

  height(): number {
    if (this.root === null) return 0;
    return this.root.height();
  }

  insert(val: number): this | null {
    const newNode = new TreeNode(val);
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
      if (val < currentNode.val) currentNode = currentNode.left as TreeNode;
      else if (val > currentNode.val)
        currentNode = currentNode.right as TreeNode;
      else return true;
    }
    return false;
  }

  invert(): this | null {
    if (this.root === null) return null;
    const traverse = (node: TreeNode): void => {
      [node.left, node.right] = [node.right, node.left];
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return this;
  }

  bfs(): number[] | null {
    let node = this.root;
    if (node === null) return null;
    let q: TreeNode[] = [];
    let data: number[] = [];
    q.push(node);

    while (q.length) {
      node = q.shift() ?? null;
      if (node) data.push(node.val);
      if (node?.left) q.push(node.left);
      if (node?.right) q.push(node.right);
    }

    return data;
  }

  dfsPreOrder(): number[] | null {
    if (this.root === null) return null;
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

  dfsInOrder(): number[] | null {
    if (this.root === null) return null;
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

  dfsPostOrder(): number[] | null {
    if (this.root === null) return null;
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

  dfsPreOrderIter(): number[] | null {
    let currentNode = this.root;
    if (!currentNode) return null;
    const stack: TreeNode[] = [];
    const result: number[] = [];
    stack.push(currentNode);
    while (stack.length > 0) {
      currentNode = stack.pop() ?? null;
      if (currentNode) result.push(currentNode.val);
      if (currentNode?.right) stack.push(currentNode.right);
      if (currentNode?.left) stack.push(currentNode.left);
    }
    return result;
  }

  dfsInOrderIter(): number[] | null {
    let currentNode = this.root;
    if (!currentNode) return null;
    const stack: TreeNode[] = [];
    const result: number[] = [];

    while (stack.length > 0 || currentNode !== null) {
      if (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      } else {
        currentNode = stack.pop() ?? null;
        if (currentNode) {
          result.push(currentNode.val);
          currentNode = currentNode.right;
        }
      }
    }
    return result;
  }

  dfsPostOrderIter(): number[] | null {
    let currentNode = this.root;
    if (!currentNode) return null;
    const stack: TreeNode[] = [];
    const result: number[] = [];
    stack.push(currentNode);
    while (stack.length > 0) {
      currentNode = stack.pop() ?? null;
      if (currentNode) result.unshift(currentNode.val);
      if (currentNode?.left) stack.push(currentNode.left);
      if (currentNode?.right) stack.push(currentNode.right);
    }
    return result;
  }

  validate(): boolean {
    const helper = (
      node: TreeNode | null,
      min: number,
      max: number
    ): boolean => {
      if (node === null) return true;
      if (node.val < min || node.val >= max) return false;
      const leftIsValid = helper(node.left, min, node.val);
      return leftIsValid && helper(node.right, node.val, max);
    };
    return helper(this.root, -Infinity, Infinity);
  }

  rangeSum(left: number, right: number): number | null {
    if (this.root === null) return null;
    let sum = 0;
    const traverse = (node: TreeNode): void => {
      if (node.left && left < node.val) traverse(node.left);
      if (node.val >= left && node.val <= right) sum += node.val;
      if (node.right && right > node.val) traverse(node.right);
    };
    traverse(this.root);
    return sum;
  }

  maxPathSum(): number | null {
    if (this.root === null) return null;
    const traverse = (node: TreeNode | null): [number, number] => {
      if (node === null) return [0, 0];
      const [leftMaxBranchSum, leftMaxPathSum] = traverse(node.left);
      const [rightMaxBranchSum, rightMaxPathSum] = traverse(node.right);
      const maxChildBranchSum = Math.max(leftMaxBranchSum, rightMaxBranchSum);

      const { val } = node;
      const maxBranchSum = Math.max(maxChildBranchSum + val, val);
      const maxRootPathSum = Math.max(
        leftMaxBranchSum + val + rightMaxBranchSum,
        maxBranchSum
      );
      const maxPathSum = Math.max(
        leftMaxPathSum,
        rightMaxPathSum,
        maxRootPathSum
      );
      return [maxBranchSum, maxPathSum];
    };
    const [_, maxSum] = traverse(this.root);
    return maxSum;
  }

  remove(val: number): TreeNode | null {
    const removeNode = (
      node: TreeNode | null,
      val: number
    ): TreeNode | null => {
      if (node === null) return null;
      if (val === node?.val) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        let temp: TreeNode | null = node.right;

        while (temp?.left === null) {
          temp = temp.left;
        }

        if (temp !== null) {
          node.val = temp.val;
          node.right = removeNode(node.right, temp.val);
        }
      } else if (val < node.val) {
        node.left = removeNode(node.left, val);
        return node;
      } else {
        node.right = removeNode(node.right, val);
        return node;
      }
      return null;
    };
    this.root = removeNode(this.root, val);
    return this.root;
  }
}
