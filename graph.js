class Graph {
  #AdjList = {};

  constructor(...vertexes) { 
    for (const vertex of vertexes) {
      this.#AdjList[vertex] = [];
    }
  }

  addVertex(vertex) {
    if (!this.#AdjList[vertex]) this.#AdjList[vertex] = [];
  }

  addEdge(v1, v2) {  
    if (!this.#AdjList[v1] || !this.#AdjList[v2])
      throw new Error("one of these vertex not exist");
    if (!this.#AdjList[v1].includes(v2)) {
      this.#AdjList[v1].push(v2);
    }
    if (!this.#AdjList[v2].includes(v1)) {
      this.#AdjList[v2].push(v1);
    }
    return {
      status: "success",
      message: "add edge successfully",
    };
  }
  
  removeEdge(v1, v2) {
    if (!this.#AdjList[v1] || !this.#AdjList[v2])
      throw new Error("one of these vertex not exist");
    const v1Index = this.#AdjList[v2].indexOf(v1);
    const v2Index = this.#AdjList[v1].indexOf(v2);
    this.#AdjList[v1].splice(v2Index, 1);
    this.#AdjList[v2].splice(v1Index, 1);
  }

  removeVertex(vertex) {
    for (const v in this.#AdjList) {
      const vIndex = this.#AdjList[v].indexOf(vertex);
      if (vIndex != -1) {
        this.#AdjList[v].splice(vIndex, 1);
      }
    }
    delete this.#AdjList[vertex];
  }

  display() {
    console.log(this.#AdjList);
  }

  // depth first search
  DFSRecursive(vertex, result = [], visited = {}) {
    if (!this.#AdjList[vertex] || !this.#AdjList[vertex].length) {
      return;
    }
    result.push(vertex);
    visited[vertex] = true;
    for (const v of this.#AdjList[vertex]) {
      if(!visited[v]){
        this.DFSRecursive(v, result, visited)
      }
    }
    return result
  }

  // depth first search
  DFSIterative(start){
    const stack = [start]
    const result = []
    const visited = {}

    visited[start] = true
    while(stack.length){
      const currentVertex = stack.pop()
      result.push(currentVertex)
      
      this.#AdjList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })

    }

    return result

  }

  // breadth first search
  BFS(startVertex){
    const queue = [startVertex]
    const visited = {}
    const result = []

    visited[startVertex] = true
    while(queue.length){
      let currentVer = queue.shift()
      result.push(currentVer)

      this.#AdjList[currentVer].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return result

  }


}

const graph = new Graph("A", "B", "C", "D", "E", "F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// graph.display();
// graph.removeEdge("C", "A");

// graph.removeVertex("D");

// graph.display();

console.log(graph.DFSRecursive("A"));
// console.log(graph.DFSIterative("A"));
console.log(graph.BFS("A"));



//    A
//  /   \
// B     C
// |     |
// D --- E
//  \   /
//    F
