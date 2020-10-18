interface ITree {
  val: number;
  left?: ITree;
  right?: ITree;
}

export class Tree implements ITree {
  public left?: Tree;
  public right?: Tree;
  constructor(public val: number = 0) {}
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
  const helper = (
    node: Tree | undefined,
    min: number,
    max: number
  ): boolean => {
    if (!node) return true;
    if (node.val < min || node.val >= max) return false;
    const leftIsValid = helper(node.left, min, node.val);
    return leftIsValid && helper(node.right, node.val, max);
  };
  return helper(tree, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

export function rangeSum(
  tree: Tree,
  left: number,
  right: number
): number | undefined {
  if (tree === undefined) undefined;
  let sum = 0;
  const traverse = (node: Tree): void => {
    if (node.left && left < node.val) traverse(node.left);
    if (node.val >= left && node.val <= right) sum += node.val;
    if (node.right && right > node.val) traverse(node.right);
  };
  traverse(tree);
  return sum;
}
