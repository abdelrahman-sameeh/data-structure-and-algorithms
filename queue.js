// class Queue{
//   constructor(){
//     this.queue = []
//   }

//   enqueue(val){
//     this.queue.push(val)
//     return this.queue
//   }

//   dequeue(){
//     return this.queue.shift()
//   }

//   display(){
//     console.log(this.queue)
//   }

// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)

// queue.dequeue()

// queue.display()

// ------------------------------------------------------------------------

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.size--;
    if (this.size === 0) {
      this.head = null;
    }
  }

  display() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.dequeue()
queue.dequeue()

queue.display();