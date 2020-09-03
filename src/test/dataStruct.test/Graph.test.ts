import { Graph } from "../../dataStruct";

describe("Graph", () => {
  const graph: Graph<string> = new Graph();

  test("add vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");
    expect(Object.keys(graph.adjList).length).toBe(6);
  });

  test("add edges", () => {
    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    graph.addEdge("C", "F", 4);
    graph.addEdge("D", "E", 3);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "F", 1);
    expect(graph.adjList["A"].length).toBe(2);
    expect(graph.adjList["B"].length).toBe(2);
    expect(graph.adjList["E"].length).toBe(3);
    expect(graph.adjList["C"].length).toBe(3);
    expect(graph.adjList["D"].length).toBe(3);
    expect(graph.adjList["F"].length).toBe(3);
  });

  test("DFS recursive and iterative traversal", () => {
    expect(graph.DFSIterative("A")).toStrictEqual([
      "A",
      "C",
      "F",
      "E",
      "D",
      "B",
    ]);

    expect(graph.DFSRecursive("A")).toStrictEqual([
      "A",
      "B",
      "E",
      "D",
      "C",
      "F",
    ]);
  });

  test("BFS traversal", () => {
    expect(graph.BFS("A")).toStrictEqual(["A", "B", "C", "E", "D", "F"]);
  });

  test("Dijkstra's Algorithm", () => {
    expect(graph.Dijkstra("A", "E")).toStrictEqual(["A", "C", "D", "F", "E"]);
  });

  test("remove edges", () => {
    graph.removeEdge("A", "B");
    graph.removeEdge("A", "C");
    graph.removeEdge("B", "E");
    graph.removeEdge("C", "D");
    graph.removeEdge("C", "F");
    graph.removeEdge("D", "E");
    graph.removeEdge("D", "F");
    graph.removeEdge("E", "F");
    expect(graph.adjList["A"].length).toBe(0);
    expect(graph.adjList["B"].length).toBe(0);
    expect(graph.adjList["E"].length).toBe(0);
    expect(graph.adjList["C"].length).toBe(0);
    expect(graph.adjList["D"].length).toBe(0);
    expect(graph.adjList["F"].length).toBe(0);
  });

  test("remove vertices and edges", () => {
    graph.removeVertex("A");
    graph.removeVertex("B");
    graph.removeVertex("C");
    graph.removeVertex("D");
    graph.removeVertex("E");
    graph.removeVertex("F");
    expect(Object.keys(graph.adjList).length).toBe(0);
    expect(graph.adjList["A"]).toBeUndefined();
    expect(graph.adjList["B"]).toBeUndefined();
    expect(graph.adjList["E"]).toBeUndefined();
    expect(graph.adjList["C"]).toBeUndefined();
    expect(graph.adjList["D"]).toBeUndefined();
    expect(graph.adjList["F"]).toBeUndefined();
  });
});
