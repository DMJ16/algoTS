interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type BinaryTree = TreeNode | null;

export class Tree implements TreeNode {
  constructor(
    public val: number = 0,
    public left: BinaryTree = null,
    public right: BinaryTree = null
  ) {}
}

const lowestCommonAncestorOfBinaryTree = (
  root: BinaryTree,
  p: BinaryTree,
  q: BinaryTree
): BinaryTree => {
  if (!root || !p || !q) return null;
  const traverse = (node: BinaryTree): BinaryTree => {
    if (!node) return null;
    if (p.val === node.val || q.val === node.val) return node;
    const left = traverse(node.left);
    const right = traverse(node.right);
    return left && right ? node : left || right;
  };
  return traverse(root);
};
