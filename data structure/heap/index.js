class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  removeMin() {
    if (this.isEmpty()) return null;
    let min = this.heap[0];
    let last = this.heap.pop();
    if (!this.isEmpty() && last != undefined) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return min;
  }

  heapifyUp() {
    if (this.size() > 1) {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parentIdx = Math.floor((index - 1) / 2);
        if (this.heap[index] >= this.heap[parentIdx]) {
          break;
        }
        [this.heap[index], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[index],
        ];
        index = parentIdx;
      }
    }
  }

  heapifyDown() {
    let index = 0;
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      if (
        leftChild < this.size() &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild;
      }

      if (
        rightChild < this.size() &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  peek() {
    return this.heap[0];
  }

  clear() {
    this.heap = [];
  }

  printHeap() {
    if (this.isEmpty()) {
      console.log("Heap is empty");
      return;
    }

    const levels = [];
    let levelStart = 0;

    while (levelStart < this.heap.length) {
      const levelEnd = levelStart * 2 + 1;
      levels.push(this.heap.slice(levelStart, levelEnd + 1).join(" "));
      levelStart = levelEnd + 1;
    }

    console.log("Heap Structure:");
    levels.forEach((level, index) => {
      console.log(`Level ${index + 1}: ${level}`);
    });
  }
}

const minHeap = new MinHeap();
minHeap.insert(17);
minHeap.insert(13);
minHeap.insert(11);
minHeap.insert(14);
minHeap.insert(8);
minHeap.insert(7);
minHeap.insert(5);

minHeap.printHeap();

console.log(minHeap.removeMin());
console.log(minHeap.removeMin());
console.log(minHeap.removeMin());

minHeap.printHeap();
