// [val, next]
//         ------- [val, next]
//                         ---------[val, next]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;

    return this;
  }

  pop() {
    if (this.length > 1) {
      const oldTail = this.tail;
      let prev;
      let head = this.head;
      while (head.next.next) {
        head = head.next;
      }
      prev = head;
      prev.next = null;
      this.length--;
      this.tail = prev;

      return oldTail;
    } else if (this.length == 1) {
      const oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;

      return oldTail;
    } else {
      return false;
    }
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    let currentHead = this.head;
    const newNode = new Node(val);
    newNode.next = currentHead;
    this.head = newNode;
    this.length++;
    if (this.length == 1) {
      this.tail = this.head;
    }
    return this;
  }

  get(index) {
    if (this.length < index || index < 0) {
      return undefined;
    }

    let count = 0;
    let current = this.head;
    while (current) {
      if (count++ == index) return current;
      current = current.next;
    }
  }

  insert(val, index) {
    if (index <= 0) {
      return this.unshift(val);
    }
    if (index >= this.length) {
      return this.push(val);
    }

    const newNode = new Node(val);
    let prev = this.get(index - 1);
    let current = this.get(index);
    newNode.next = current;
    prev.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let current = this.get(index);
    prev.next = current.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  reverse(){
    let lastHead = this.head
    let current = this.get(0)
    
    while(current){
      console.log(current);
      current = current.next

    }

  }
}

const list = new LinkedList();

// list.push("hello");
// list.push("amo");
// list.push("sami");
// list.push("hani");
// list.pop();
// console.log(list.pop());
// list.pop();
// list.pop();

// console.log(list.shift());
// console.log(list.shift());
// list.push(20)
// list.pop()

// list.unshift(10)
// list.push(20)
// list.unshift(5)

// console.log(list.get(2));
// list.insert("test value", 5);
// console.log(list.get(2));

// list.remove(0);
// list.remove(0);
// list.remove(2);
// list.remove(0);

// console.log(list.get(2));

// console.log(list);
// console.log('------------');

// list.reverse();


