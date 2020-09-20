interface INode<T> {
  val: T;
  next?: INode<T>;
}
export class Node<T> implements INode<T> {
  next?: INode<T> = undefined;
  constructor(public val: T) {}
}
