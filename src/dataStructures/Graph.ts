type Node = { vertex: string; weight: number };

interface IAdjList {
  [key: string]: Node[];
}

interface IGraph<T> {
  adjList: IAdjList;
  addVertex(vertex: T): void;
  removeVertex(vertex: T): void;
  addEdge(v1: T, v2: T, weight: number): void;
  removeEdge(v1: T, v2: T): void;
  DFSRecursive(startVertex: T): T[];
  DFSIterative(startVertex: T): T[];
  BFS(startVertex: T): T[];
  Dijkstra(start: string, end: string): string[];
}

export class Graph implements IGraph<string> {
  public adjList: IAdjList = {};

  addVertex(vertex: string): void {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdge(v1: string, v2: string, weight: number): void {
    if (v1 in this.adjList && v2 in this.adjList) {
      this.adjList[v1].push({ vertex: v2, weight });
      this.adjList[v2].push({ vertex: v1, weight });
    }
  }

  removeEdge(v1: string, v2: string): void {
    if (v1 in this.adjList && v2 in this.adjList) {
      if (this.adjList[v1].length)
        this.adjList[v1] = this.adjList[v1].filter(
          (edge) => edge.vertex !== v2
        );
      if (this.adjList[v2].length)
        this.adjList[v2] = this.adjList[v2].filter(
          (edge) => edge.vertex !== v1
        );
    }
  }

  removeVertex(vertex: string): void {
    if (vertex in this.adjList) {
      for (const edge of this.adjList[vertex]) {
        this.removeEdge(vertex, edge.vertex);
      }
      delete this.adjList[vertex];
    }
  }

  DFSRecursive(startVertex: string): string[] {
    let data: string[] = [];
    let visited: { [key: string]: boolean } = {};
    const visitedHelper = (v: string): boolean => {
      return this.adjList[v].every((item) => !!visited[item.vertex] === true);
    };
    const DFS = (v: string): void => {
      if (!this.adjList[v].length) return;
      if (!(v in visited)) visited[v] = true;
      data.push(v);
      if (visitedHelper(v)) return;
      for (let i = 0, len = this.adjList[v].length; i < len; i++) {
        const node = this.adjList[v][i];
        if (!visited[node.vertex]) {
          DFS(node.vertex);
        }
      }
    };
    DFS(startVertex);
    return data;
  }

  DFSIterative(startVertex: string): string[] {
    let stack = [startVertex];
    let data: string[] = [];
    let visited: { [key: string]: boolean } = {};
    let currentVertex;
    visited[startVertex] = true;

    while (stack.length) {
      currentVertex = stack.pop() as string;
      data.push(currentVertex);

      this.adjList[currentVertex].forEach((edge) => {
        if (!visited[edge.vertex]) {
          visited[edge.vertex] = true;
          stack.push(edge.vertex);
        }
      });
    }

    return data;
  }

  BFS(startVertex: string): string[] {
    const queue = [startVertex];
    const data: string[] = [];
    const visited: { [key: string]: boolean } = {};
    let currentVertex: string;
    visited[startVertex] = true;

    while (queue.length) {
      currentVertex = queue.shift() as string;
      data.push(currentVertex);

      this.adjList[currentVertex].forEach((edge) => {
        if (!visited[edge.vertex]) {
          visited[edge.vertex] = true;
          queue.push(edge.vertex);
        }
      });
    }

    return data;
  }

  topologicalSort(): string[] {
    const stack: string[] = [];
    const data: string[] = [];
    const visited: Set<string> = new Set<string>();

    const sort = (currentVertex: string): void => {
      visited.add(currentVertex);
      for (const neighbor of this.adjList[currentVertex]) {
        if (!visited.has(neighbor.vertex)) {
          sort(neighbor.vertex);
        }
      }
      stack.push(currentVertex);
    };

    for (const vertex in this.adjList) {
      if (!visited.has(vertex)) sort(vertex);
    }

    while (stack.length) {
      data.push(stack.pop() as string);
    }

    return data;
  }

  Dijkstra(startVertex: string, endVertex: string): string[] {
    const distances: { [key: string]: number } = {};
    const PQ = new PriorityQueue();
    const prev: { [key: string]: string } = {};
    const resultPath: string[] = [];
    let nearestVertex: string = "";

    Object.keys(this.adjList).forEach((vertex) => {
      if (startVertex === vertex) {
        distances[vertex] = 0;
        PQ.enqueue(vertex, 0);
      } else {
        distances[vertex] = Number.POSITIVE_INFINITY;
        PQ.enqueue(vertex, Number.POSITIVE_INFINITY);
      }
      prev[vertex] = "";
    });

    while (PQ.values.length) {
      nearestVertex = PQ.dequeue().val;
      if (nearestVertex === endVertex) {
        while (prev[nearestVertex]) {
          resultPath.push(nearestVertex);
          nearestVertex = prev[nearestVertex];
        }
        break;
      }

      if (
        nearestVertex ||
        distances[nearestVertex] !== Number.POSITIVE_INFINITY
      ) {
        for (const neighbor in this.adjList[nearestVertex]) {
          let nextNode = this.adjList[nearestVertex][neighbor];
          let newDistance = distances[nearestVertex] + nextNode.weight;
          let nextNodeVertex = nextNode.vertex;
          if (newDistance < distances[nextNodeVertex]) {
            distances[nextNodeVertex] = newDistance;
            prev[nextNodeVertex] = nearestVertex;
            PQ.enqueue(nextNodeVertex, newDistance);
          }
        }
      }
    }

    return resultPath.concat(nearestVertex).reverse();
  }
}

class HeapNode {
  constructor(public val: string, public priority: number) {}
}

class PriorityQueue {
  public values: HeapNode[] = [];

  enqueue(val: string, priority: number) {
    let newNode = new HeapNode(val, priority);
    this.values.push(newNode);
    let i = this.values.length - 1;
    const element = this.values[i];
    while (i > 0) {
      let parentIdx = Math.floor((i - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      [this.values[parentIdx], this.values[i]] = [element, parent];
      i = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0 && end) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let i = 0;
    const len = this.values.length;
    const temp = this.values[i];
    while (true) {
      let leftChildIdx = 2 * i + 1;
      let rightChildIdx = 2 * i + 2;
      let leftChild, rightChild;
      let swap = undefined;
      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < temp.priority) swap = leftChildIdx;
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (leftChild)
          if (
            (swap === undefined && rightChild.priority < temp.priority) ||
            (swap !== undefined && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
      }
      if (swap === undefined) break;
      [this.values[i], this.values[swap]] = [this.values[swap], temp];
      i = swap;
    }
  }
}
