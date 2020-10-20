class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1,vertex2, weight){
    this.adjacencyList[vertex1].push({node:vertex2,weight});
    this.adjacencyList[vertex2].push({node:vertex1, weight});
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B", 9)
g.addEdge("A", "C", 5)
g.addEdge("B", "C", 7)

console.log(g.adjacencyList.C)
