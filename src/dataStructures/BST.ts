interface ITreeNode {
  val: number;
  left?: ITreeNode;
  right?: ITreeNode;
  size(): number;
  height(): number;
}

interface IBST {
  root?: ITreeNode;
  size(): number;
  height(): number;
  insert(val: number): this | undefined;
  search(val: number): boolean;
  remove(val: number): ITreeNode | undefined;
  invert(): this | undefined;
  validate(): boolean;
  rangeSum(left: number, right: number): number | undefined;
  flatten(): this | undefined;
  bfs(): number[] | undefined;
  zigzagTraversal(): number[] | undefined;
  dfsPreOrder(): number[] | undefined;
  dfsInOrder(): number[] | undefined;
  dfsPostOrder(): number[] | undefined;
  dfsPreOrderIter(): number[] | undefined;
  dfsInOrderIter(): number[] | undefined;
  dfsPostOrderIter(): number[] | undefined;
}

class TreeNode implements ITreeNode {
  left?: TreeNode;
  right?: TreeNode;
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
  root?: TreeNode;

  size(): number {
    if (this.root === undefined) return 0;
    return this.root.size();
  }

  height(): number {
    if (this.root === undefined) return 0;
    return this.root.height();
  }

  insert(val: number): this | undefined {
    const newNode = new TreeNode(val);
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
    return undefined;
  }

  search(val: number): boolean {
    if (this.root === undefined) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) currentNode = currentNode.left as TreeNode;
      else if (val > currentNode.val)
        currentNode = currentNode.right as TreeNode;
      else return true;
    }
    return false;
  }

  remove(val: number): TreeNode | undefined {
    const removeNode = (
      node: TreeNode | undefined,
      val: number
    ): TreeNode | undefined => {
      if (node === undefined) return undefined;
      if (val === node?.val) {
        if (node.left === undefined && node.right === undefined) {
          return undefined;
        }
        if (node.left === undefined) return node.right;
        if (node.right === undefined) return node.left;
        let temp: TreeNode | undefined = node.right;
        while (temp?.left === undefined) {
          temp = temp?.left;
        }
        if (temp !== undefined) {
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
      return undefined;
    };
    this.root = removeNode(this.root, val);
    return this.root;
  }

  invert(): this | undefined {
    if (this.root === undefined) return undefined;
    const traverse = (node: TreeNode): void => {
      [node.left, node.right] = [node.right, node.left];
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return this;
  }

  validate(): boolean {
    const isValid = (
      node: TreeNode | undefined,
      min: number,
      max: number
    ): boolean => {
      if (node === undefined) return true;
      if (node.val < min || node.val >= max) return false;
      const leftIsValid = isValid(node.left, min, node.val);
      return leftIsValid && isValid(node.right, node.val, max);
    };
    return isValid(this.root, -Infinity, Infinity);
  }

  rangeSum(left: number, right: number): number | undefined {
    if (this.root === undefined) return undefined;
    let sum = 0;
    const traverse = (node: TreeNode): void => {
      if (node.left && left < node.val) traverse(node.left);
      if (node.val >= left && node.val <= right) sum += node.val;
      if (node.right && right > node.val) traverse(node.right);
    };
    traverse(this.root);
    return sum;
  }

  maxPathSum(): number | undefined {
    if (this.root === undefined) return undefined;
    const traverse = (node: TreeNode | undefined): [number, number] => {
      if (node === undefined) return [0, 0];
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

  flatten(): this | undefined {
    if (this.root === undefined) return undefined;
    const traverse = (node: TreeNode): void => {
      if (node.left) traverse(node.left);
      treeNodes.push(node);
      if (node.right) traverse(node.right);
    };
    const treeNodes: TreeNode[] = [];
    traverse(this.root);
    for (let i = 0; i < treeNodes.length; i++) {
      if (i === 0) {
        this.root = treeNodes[i];
        this.root.left = undefined;
      } else {
        treeNodes[i].left = treeNodes[i - 1];
      }
      if (i === treeNodes.length - 1) {
        treeNodes[i].right = undefined;
      } else {
        treeNodes[i].right = treeNodes[i + 1];
      }
    }
    return this;
  }

  bfs(): number[] | undefined {
    let node = this.root;
    if (node === undefined) return undefined;
    let queue: TreeNode[] = [];
    let data: number[] = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      if (node) data.push(node.val);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }

    return data;
  }

  zigzagTraversal(): number[] | undefined {
    let node = this.root;
    if (node === undefined) return undefined;
    let deque: TreeNode[] = [];
    let data: number[] = [];
    let depth = 1;
    deque.push(node);
    while (deque.length) {
      if (depth % 2 !== 0) node = deque.shift();
      else node = deque.pop();
      if (node !== undefined) data.push(node.val);
      depth++;
      if (node?.left) deque.push(node.left);
      if (node?.right) deque.push(node.right);
    }
    return data;
  }

  dfsPreOrder(): number[] | undefined {
    if (this.root === undefined) return undefined;
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

  dfsInOrder(): number[] | undefined {
    if (this.root === undefined) return undefined;
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

  dfsPostOrder(): number[] | undefined {
    if (this.root === undefined) return undefined;
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

  dfsPreOrderIter(): number[] | undefined {
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

  dfsInOrderIter(): number[] | undefined {
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
        if (currentNode) {
          result.push(currentNode.val);
          currentNode = currentNode.right;
        }
      }
    }
    return result;
  }

  dfsPostOrderIter(): number[] | undefined {
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
}
