export function topologicalSort(jobs: number[], deps: number[][]): number[] {
  const graph = createJobGraph(jobs, deps);
  return getOrderedJobs(graph);
}

function createJobGraph(jobs: number[], deps: number[][]): JobGraph {
  const graph = new JobGraph(jobs);
  for (let i = 0; i < deps.length; i++) {
    const job = deps[i][0];
    const dep = deps[i][1];
    graph.addDep(job, dep);
  }
  return graph;
}

function getOrderedJobs(graph: JobGraph): number[] {
  const orderedJobs: number[] = [];
  const noReqNodes = graph.nodes.filter((node) => !node.reqsCount);
  while (noReqNodes.length) {
    const node = noReqNodes.pop();
    if (node) {
      orderedJobs.push(node.job);
      removeDeps(node, noReqNodes);
    }
  }
  const edges = graph.nodes.some((node) => node.reqsCount);
  return edges ? [] : orderedJobs;
}

function removeDeps(node: JobNode, noReqNodes: JobNode[]): void {
  while (node.deps.length) {
    const dep = node.deps.pop();
    if (dep) {
      dep.reqsCount--;
      if (!dep.reqsCount) noReqNodes.push(dep);
    }
  }
}

class JobNode {
  job: number;
  deps: JobNode[] = [];
  reqsCount: number = 0;
  constructor(job: number) {
    this.job = job;
  }
}

class JobGraph {
  nodes: JobNode[] = [];
  graph: { [key: number]: JobNode } = {};
  constructor(jobs: number[]) {
    for (let i = 0; i < jobs.length; i++) {
      this.addNode(jobs[i]);
    }
  }

  addDep(job: number, dep: number): void {
    const jobNode = this.getNode(job);
    const depNode = this.getNode(dep);
    jobNode.deps.push(depNode);
    depNode.reqsCount++;
  }

  addNode(job: number): void {
    this.graph[job] = new JobNode(job);
    this.nodes.push(this.graph[job]);
  }

  getNode(job: number): JobNode {
    if (!(job in this.graph)) this.addNode(job);
    return this.graph[job];
  }
}
