// -----------  USING Priority Queue
class WeightedGraph {
  #AdjList = {};

  constructor(...vertexes) {
    for (const vertex of vertexes) {
      this.#AdjList[vertex] = [];
    }
  }

  display() {
    console.log(this.#AdjList);
  }

  addVertex(vertex) {
    if (!this.#AdjList[vertex]) this.#AdjList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    if (!this.#AdjList[v1] || !this.#AdjList[v2])
      throw new Error("one of these vertex not exist");
    if (!weight) throw new Error("weight is required");
    if (weight && isNaN(Number.parseFloat(weight))) throw new Error();

    weight = Number.parseFloat(weight);
    const v1HasV2 = this.#AdjList[v1].find((item) => item.vertex == v2);
    if (!v1HasV2) {
      this.#AdjList[v1].push({
        vertex: v2,
        weight,
      });
    }
    const v2HasV1 = this.#AdjList[v2].find((item) => item.vertex == v1);
    if (!v2HasV1) {
      this.#AdjList[v2].push({
        vertex: v1,
        weight,
      });
    }
    return {
      status: "success",
      message: "add edge successfully",
    };
  }

  dijkstra(startVertex, endVertex) {
    if (!startVertex || !endVertex)
      throw new Error("dijkatra accept 2 vertexes as params");
    if (!this.#AdjList[startVertex] || !this.#AdjList[endVertex])
      throw new Error("one of these vertex not exist");

    const distances = { [startVertex]: 0 };
    const previous = {};
    const visited = new Set();
    const pq = new PriorityQueue();

    for (const vertex in this.#AdjList) {
      distances[vertex] = vertex == startVertex ? 0 : Infinity;
      pq.enqueue(vertex, distances[vertex]);
      previous[vertex] = null;
    }

    while (!pq.isEmpty()) {
      const { vertex } = pq.dequeue();
      visited.add(vertex);

      if (vertex == endVertex) {
        const path = [];
        let current = endVertex;
        while (current) {
          path.unshift(current);
          current = previous[current];
        }
        return path;
      } else {
        for (const neighbor of this.#AdjList[vertex]) {
          const { vertex: nextVertex, weight } = neighbor;
          if (!visited.has(nextVertex)) {
            const newDist = weight + distances[vertex];
            if (newDist < distances[nextVertex]) {
              distances[nextVertex] = newDist;
              previous[nextVertex] = vertex;
              pq.enqueue(nextVertex, newDist);
            }
          }
        }
      }
    }
  }

}

// Priority Queue implementation for the Dijkstra Algorithm
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(vertex, priority) {
    this.items.push({ vertex, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage
const g = new WeightedGraph("A", "B", "C", "D");

g.addEdge("A", "B", 1);
g.addEdge("A", "C", 1);
g.addEdge("A", "D", 3);
g.addEdge("B", "C", 2);
g.addEdge("C", "D", 3);

// g.display();

try {
  const path = g.dijkstra("A", "C");
  console.log("Shortest path from C to A:", path);
} catch (err) {
  console.error(err.message);
}

/**
        A 
  1/    |    \3  
  /     4     \
B  -2-  C  -3- D

*/

// -----------  USING Heap algorithm

// class WeightedGraph {
//   #AdjList = {};

//   constructor(...vertexes) {
//     for (const vertex of vertexes) {
//       this.#AdjList[vertex] = [];
//     }
//   }

//   display() {
//     console.log(this.#AdjList);
//   }

//   addVertex(vertex) {
//     if (!this.#AdjList[vertex]) this.#AdjList[vertex] = [];
//   }

//   addEdge(v1, v2, weight) {
//     if (!this.#AdjList[v1] || !this.#AdjList[v2])
//       throw new Error("one of these vertex not exist");
//     if (!weight) throw new Error("weight is required");
//     if (weight && isNaN(Number.parseFloat(weight))) throw new Error();

//     weight = Number.parseFloat(weight);
//     const v1HasV2 = this.#AdjList[v1].find((item) => item.vertex == v2);
//     if (!v1HasV2) {
//       this.#AdjList[v1].push({
//         vertex: v2,
//         weight,
//       });
//     }
//     const v2HasV1 = this.#AdjList[v2].find((item) => item.vertex == v1);
//     if (!v2HasV1) {
//       this.#AdjList[v2].push({
//         vertex: v1,
//         weight,
//       });
//     }
//     return {
//       status: "success",
//       message: "add edge successfully",
//     };
//   }

//   dijkstra(v1, v2) {
//     if (!v1 || !v2)
//       throw new Error("dijkstra accept 2 vertexes as params");
//     if (!this.#AdjList[v1] || !this.#AdjList[v2])
//       throw new Error("one of these vertex not exist");

//     const distances = {}; // لتخزين المسافات من نقطة البداية
//     const previous = {}; // لتتبع المسار الأقصر
//     const visited = new Set(); // لتتبع العقد التي تمت زيارتها
//     const pq = new MinHeap(); // لاستخدام الأولويات في اختيار العقدة

//     // تهيئة جميع العقد
//     for (const vertex in this.#AdjList) {
//       distances[vertex] = vertex === v1 ? 0 : Infinity;
//       previous[vertex] = null;
//       pq.insert(vertex, distances[vertex]);
//     }

//     while (!pq.isEmpty()) {
//       const { vertex } = pq.remove(); // نختار العقدة الأقل في المسافة
//       visited.add(vertex); // نضيفها للعقد التي تمت زيارتها

//       if (vertex === v2) {
//         // إذا وصلنا للنقطة النهائية
//         const path = [];
//         let current = v2;
//         while (current) {
//           path.unshift(current);
//           current = previous[current];
//         }
//         return path;
//       }

//       // تحديث المسافات للعقد المجاورة
//       for (const neighbor of this.#AdjList[vertex]) {
//         const { vertex: nextVertex, weight } = neighbor;
//         if (!visited.has(nextVertex)) {
//           const newDist = distances[vertex] + weight;
//           if (newDist < distances[nextVertex]) {
//             distances[nextVertex] = newDist;
//             previous[nextVertex] = vertex;
//             pq.insert(nextVertex, newDist);
//           }
//         }
//       }
//     }

//     return null; // في حالة عدم وجود مسار
//   }
// }

// // MinHeap implementation for the Dijkstra Algorithm
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   insert(vertex, priority) {
//     this.heap.push({ vertex, priority });
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     const element = this.heap[index];

//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       let parent = this.heap[parentIndex];

//       if (element.priority >= parent.priority) break;
//       this.heap[index] = parent;
//       this.heap[parentIndex] = element;
//       index = parentIndex;
//     }
//   }

//   remove() {
//     const min = this.heap[0];
//     const end = this.heap.pop();
//     if (this.heap.length > 0) {
//       this.heap[0] = end;
//       this.sinkDown();
//     }
//     return min;
//   }

//   sinkDown() {
//     let index = 0;
//     const length = this.heap.length;
//     const element = this.heap[0];

//     while (true) {
//       let leftChildIndex = 2 * index + 1;
//       let rightChildIndex = 2 * index + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       if (leftChildIndex < length) {
//         leftChild = this.heap[leftChildIndex];
//         if (leftChild.priority < element.priority) {
//           swap = leftChildIndex;
//         }
//       }

//       if (rightChildIndex < length) {
//         rightChild = this.heap[rightChildIndex];
//         if (
//           (swap === null && rightChild.priority < element.priority) ||
//           (swap !== null && rightChild.priority < leftChild.priority)
//         ) {
//           swap = rightChildIndex;
//         }
//       }

//       if (swap === null) break;
//       this.heap[index] = this.heap[swap];
//       this.heap[swap] = element;
//       index = swap;
//     }
//   }

//   isEmpty() {
//     return this.heap.length === 0;
//   }
// }

// // Example usage
// const g = new WeightedGraph("A", "B", "C", "D");

// g.addEdge("A", "B", 1);
// g.addEdge("A", "C", 4);
// g.addEdge("A", "D", 3);
// g.addEdge("B", "C", 2);
// g.addEdge("C", "D", 3);

// g.display();

// try {
//   const path = g.dijkstra("C", "A");
//   console.log("Shortest path from C to A:", path);
// } catch (err) {
//   console.error(err.message);
// }
