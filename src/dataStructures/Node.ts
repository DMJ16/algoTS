interface INode<T> {
  val: T;
  next: INode<T> | null;
}
export class Node<T> implements INode<T> {
  next: INode<T> | null = null;
  constructor(public val: T) {}
}
