class Heap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let targetIdx = this.values.length - 1;
    let target = this.values[targetIdx];
    let parentIdx = Math.floor((targetIdx - 1) / 2);
    let parent = this.values[parentIdx];

    while (target > parent) {
      this.values[targetIdx] = parent;
      this.values[parentIdx] = target;
      targetIdx = parentIdx;
      parentIdx = Math.floor((targetIdx - 1) / 2);
      parent = this.values[parentIdx];
    }
  }

  // remove (extract max >> root)
  extractMax() {
    let lastElem = this.values.pop();
    let parentIdx = 0;
    this.values[parentIdx] = lastElem;
    let leftChildIdx = 2 * parentIdx + 1;
    let rightChildIdx = 2 * parentIdx + 2;
    let length = this.values.length
    let leftChild, rightChild
    if(leftChildIdx>length){
      leftChild = this.values[leftChildIdx]
    }
    if(rightChildIdx>length){
      rightChild = this.values[rightChildIdx]
    }

    while(leftChild>rightChild){
      this.values[leftChildIdx] = lastElem
      this.values[parentIdx] = leftChild
      parentIdx = leftChildIdx

      leftChildIdx = 2 * parentIdx + 1;
      rightChildIdx = 2 * parentIdx + 2;
      leftChild = this.values[leftChildIdx]
      rightChild = this.values[rightChildIdx]
    }

    while(rightChild>leftChild){
      this.values[rightChildIdx] = lastElem
      this.values[parentIdx] = rightChild
      parentIdx = rightChildIdx

      leftChildIdx = 2 * parentIdx + 1;
      rightChildIdx = 2 * parentIdx + 2;
      leftChild = this.values[leftChildIdx]
      rightChild = this.values[rightChildIdx]
    }

    return this.values

  }
}

const heap = new Heap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(32);
heap.insert(33);
heap.insert(12);
heap.insert(35);
console.log(heap.insert(40));
console.log(heap.extractMax());
console.log(heap.extractMax());

// [40, 35, 33, 32, 30, 12, 20, 10]

// extractMax (one call)
// [10, 35, 33, 32, 30, 12, 20]
// [35, 10, 33, 32, 30, 12, 20]
// [35, 32, 33, 20, 30, 12, 10]
