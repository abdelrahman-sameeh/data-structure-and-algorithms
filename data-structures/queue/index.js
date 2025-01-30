// Queue Using Array
// class Queue {
//   constructor(...data) {
//     this.items = [...data];
//   }

//   enqueue(...items) {
//     this.items.push(...items);
//   }

//   dequeue() {
//     return this.items.shift();
//   }

//   size() {
//     return this.items.length;
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   frontValue() {
//     return this.items[0];
//   }
//   clear() {
//     this.items = [];
//   }
//   printQueue() {
//     if (this.items.length) {
//       console.log("** Start Of Stack");
//       this.items.forEach((item, index) => {
//         console.log(item);
//       });
//       console.log("** End Of Stack");
//     } else return;
//   }
// }

// let q = new Queue(1, 2, 3, 4);

// q.enqueue(5, 6, 7);

// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();

// q.printQueue();
// console.log(q.frontValue());

// q.clear()

// q.printQueue();

// Queue Using Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(...items) {
    this.front = null;
    this.rear = null;
    this.count = 0;

    if (items.length) this.enqueue(...items);
  }

  enqueue(...items) {
    items.forEach((item) => {
      this.count++;
      const newNode = new Node(item);
      if (!this.front) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        let current = this.front;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        this.rear = newNode;
      }
    });
  }

  dequeue() {
    this.count--;
    if (this.count === 0) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
  }

  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  frontValue() {
    const front = JSON.parse(JSON.stringify(this.front));
    return {
      ...front,
      next: null,
    };
  }

  clear() {
    this.front = null;
    this.rear = null;
    this.count = 0;
  }
  printQueue() {
    while (this.front) {
      console.log(this.front.data);
      this.front = this.front.next;
    }
  }
}

let q = new Queue(1, 2, 3, 4);
q.enqueue(5, 6);
q.dequeue();

console.log(q.frontValue());
q.printQueue();

console.log(q);
