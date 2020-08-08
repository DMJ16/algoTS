import { BinarySearchTree } from "./BST";

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(7);
tree.insert(120);
tree.insert(1);
console.log(tree.insert(90));
console.log(tree.BFS());
