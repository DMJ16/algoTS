interface ITree {
  val: number;
  left?: ITree;
  right?: ITree;
}

export class Tree implements ITree {
  constructor(
    public val: number = 0,
    public left?: Tree,
    public right?: Tree
  ) {}
}

export function generateBST(
  tree: Tree = new Tree(),
  values: number | number[]
): Tree | undefined {
  if (typeof values === "number") return insert(values, tree);
  else if (Array.isArray(values) && values.length === 0) return undefined;
  else if (Array.isArray(values) && values.length === 1)
    return insert(values[0], tree);
  else {
    values.forEach((val) => {
      insert(val, tree);
    });
    return tree;
  }
}

export function insert(val: number, tree?: Tree): Tree | undefined {
  const newNode = new Tree(val);
  if (tree === undefined) {
    return newNode;
  }
  let currentNode = tree;
  while (currentNode) {
    if (val === currentNode.val) return undefined;
    if (val < currentNode.val) {
      if (currentNode.left === undefined) {
        currentNode.left = newNode;
        return currentNode;
      }
      currentNode = currentNode.left as Tree;
    } else {
      if (currentNode.right === undefined) {
        currentNode.right = newNode;
        return currentNode;
      }
      currentNode = currentNode.right as Tree;
    }
  }
  return undefined;
}

export function search(val: number, tree?: Tree): boolean {
  if (tree === undefined) return false;
  let currentNode = tree;
  while (currentNode) {
    if (val < currentNode.val) currentNode = currentNode.left as Tree;
    else if (val > currentNode.val) currentNode = currentNode.right as Tree;
    else return true;
  }
  return false;
}

export function invert(tree?: Tree): Tree | undefined {
  if (tree === undefined) return undefined;
  [tree.left, tree.right] = [tree.right, tree.left];
  if (tree.left) invert(tree.left);
  if (tree.right) invert(tree.right);
  return tree;
}

export function BFS(tree?: Tree): number[] | undefined {
  if (tree === undefined) return undefined;
  let queue: Tree[] = [];
  let data: number[] = [];
  queue.push(tree);
  let currentNode: Tree;

  while (queue.length) {
    currentNode = queue.shift() as Tree;
    data.push(currentNode.val);
    if (currentNode?.left) queue.push(currentNode.left);
    if (currentNode?.right) queue.push(currentNode.right);
  }

  return data;
}

export function DFSPreOrder(tree?: Tree, result: number[] = []): number[] {
  if (tree !== undefined) {
    result.push(tree.val);
    if (tree.left) DFSPreOrder(tree.left, result);
    if (tree.right) DFSPreOrder(tree.right, result);
  }
  return result;
}

export function DFSInOrder(tree?: Tree, result: number[] = []): number[] {
  if (tree !== undefined) {
    if (tree.left) DFSInOrder(tree.left, result);
    result.push(tree.val);
    if (tree.right) DFSInOrder(tree.right, result);
  }
  return result;
}

export function DFSPostOrder(tree?: Tree, result: number[] = []): number[] {
  if (tree !== undefined) {
    if (tree.left) DFSPostOrder(tree.left, result);
    if (tree.right) DFSPostOrder(tree.right, result);
    result.push(tree.val);
  }
  return result;
}

export function validate(tree?: Tree): boolean {
  const isValid = (node: Tree | undefined) => (min: number) => (
    max: number
  ): boolean => {
    if (node === undefined) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      isValid(node.left)(min)(node.val) && isValid(node.right)(node.val)(max)
    );
  };
  return isValid(tree)(-Infinity)(Infinity);
}

export function rangeSum(
  tree: Tree | undefined,
  left: number,
  right: number
): number | undefined {
  if (tree === undefined) return undefined;
  let sum = 0;
  const traverse = (node: Tree): void => {
    if (node.left && left < node.val) traverse(node.left);
    if (node.val >= left && node.val <= right) sum += node.val;
    if (node.right && right > node.val) traverse(node.right);
  };
  traverse(tree);
  return sum;
}

export function maxDepth(root?: Tree): number {
  if (root === undefined) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

export function deepestLeavesSum(root?: Tree): number {
  let sum = 0;
  let deepestLevel = 0;
  const traverse = (node: Tree | undefined) => (depth: number): void => {
    if (node == undefined) return;

    if (depth === deepestLevel) {
      sum += node.val;
    } else if (depth > deepestLevel) {
      deepestLevel = depth;
      sum = node.val;
    }

    if (node.left) traverse(node.left)(depth + 1);
    if (node.right) traverse(node.right)(depth + 1);
  };
  traverse(root)(0);
  return sum;
}

export function mergeTrees(tree1?: Tree, tree2?: Tree): Tree | undefined {
  return tree1 && tree2
    ? new Tree(
        tree1.val + tree2.val,
        mergeTrees(tree1.left, tree2.left),
        mergeTrees(tree1.right, tree2.right)
      )
    : tree1 || tree2;
}

export function levelOrderBottomUp(root: Tree) {
  const q = [root];
  const result = [];

  while (q.length > 0) {
    const level = [];
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const currentNode = q.shift();
      if (currentNode != null) {
        level.push(currentNode.val);
        if (currentNode.left != null) q.push(currentNode.left);
        if (currentNode.right != null) q.push(currentNode.right);
      }
    }
    result.unshift(level);
  }

  return result;
}
