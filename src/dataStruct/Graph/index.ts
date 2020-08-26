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
    else throw new Error("vertex already initialized");
  }

  addEdge(v1: string, v2: string, weight: number): void {
    if (v1 in this.adjList && v2 in this.adjList) {
      this.adjList[v1].push({ vertex: v2, weight });
      this.adjList[v2].push({ vertex: v1, weight });
    } else throw new Error("one of both vertices are uninitialized");
  }

  removeEdge(v1: string, v2: string): void {
    if (v1 in this.adjList && v2 in this.adjList) {
      if (this.adjList[v1].length)
        this.adjList[v1] = this.adjList[v1].filter(
          (edge) => edge.vertex !== v2
        );
      if (this.adjList[v1].length)
        this.adjList[v2] = this.adjList[v2].filter(
          (edge) => edge.vertex !== v1
        );
    } else throw new Error("one of both vertices are uninitialized");
  }

  removeVertex(vertex: string): void {
    if (vertex in this.adjList) {
      for (const edge of this.adjList[vertex]) {
        this.removeEdge(vertex, edge.vertex);
      }
      delete this.adjList[vertex];
    } else throw new Error("vertex does not exist");
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
    let q = [startVertex];
    let data: string[] = [];
    let visited: { [key: string]: boolean } = {};
    let currentVertex: string;
    visited[startVertex] = true;

    while (q.length) {
      currentVertex = q.shift() as string;
      data.push(currentVertex);

      this.adjList[currentVertex].forEach((edge) => {
        if (!visited[edge.vertex]) {
          visited[edge.vertex] = true;
          q.push(edge.vertex);
        }
      });
    }

    return data;
  }

  Dijkstra(start: string, end: string): string[] {
    let distances: { [key: string]: number } = {};
    const q = new PriorityQueue();
    let previous: { [key: string]: string | undefined } = {};
    let path: string[] = [];
    let smallest: string = "";

    Object.keys(this.adjList).forEach((v) => {
      if (v === start) {
        distances[v] = 0;
        q.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        q.enqueue(v, Infinity);
      }
      previous[v] = undefined;
    });

    while (q.values.length) {
      smallest = q.dequeue().val;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest] as string;
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjList[smallest]) {
          // find neighboring node
          let nextNode = this.adjList[smallest][neighbor];
          //calculate new distance to neighboring node
          let newDistance = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.vertex;
          if (newDistance < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = newDistance;
            // updating previous -- how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue priority queue with new priority
            q.enqueue(nextNeighbor, newDistance);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
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
      let swap = null;
      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < temp.priority) swap = leftChildIdx;
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (leftChild)
          if (
            (swap === null && rightChild.priority < temp.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
      }
      if (swap === null) break;
      [this.values[i], this.values[swap]] = [this.values[swap], temp];
      i = swap;
    }
  }
}
