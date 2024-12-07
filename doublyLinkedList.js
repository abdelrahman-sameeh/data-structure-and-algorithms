class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.length) return undefined;
    this.tail = this.tail.prev;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
  }

  shift() {
    if (!this.length) return undefined;
    let shiftedNode = this.head;
    this.head = shiftedNode.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    return shiftedNode;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let count;
    if (index > this.length) return undefined;
    if (index > Math.floor(this.length / 2)) {
      count = this.length;
      let currentTail = this.tail;
      while (currentTail) {
        if (count == index) break;
        currentTail = currentTail.prev;
        count--;
      }
      return currentTail.next;
    } else {
      count = 0;
      let currentHead = this.head;
      while (currentHead) {
        if (count == index) break;
        currentHead = currentHead.next;
        count++;
      }
      return currentHead;
    }
  }

  set(index, value) {
    const targetNode = this.get(index);
    if (targetNode) {
      targetNode.val = value;
      return targetNode;
    }
    return undefined;
  }

  insert(index, value) {
    if (index <= 0) {
      return this.unshift(value);
    } else if (index >= this.length) {
      return this.push(value);
    } else {
      let newNode = new Node(value);
      let beforeNode = this.get(index - 1);
      let afterNode = beforeNode.next;
      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
      this.length++;
      return newNode;
    }
  }

  remove(index) {
    if (this.length - 1 < index || index < 0) return undefined;
    if (index == 0) return this.shift();
    if (this.length - 1 == index) return this.pop();

    let beforeNode = this.get(index - 1);
    console.log(beforeNode);
    beforeNode.next = beforeNode.next.next;
    this.length--;
    // return this
  }
}

/*
    H                                   T
  item1 <--->  hhhh  <----> item2 <---> item3
*/

const list = new LinkedList();

list.push("item 1");
list.push("item 2");
list.push("item 3");
list.pop();
list.pop();
list.pop();
list.pop();
list.push("item 1");
list.push("item 2");
list.push("item 3");

list.shift();
list.shift();
list.shift();

list.unshift("item 6");
list.unshift("item 5");
list.unshift("item 4");
list.unshift("item 3");
list.unshift("item 2");
list.unshift("item 1");
list.unshift("item 0");

// console.log(list.get(5));
// console.log(list.get(4));
// console.log(list.get(3));
// console.log(list.get(2));
// console.log(list.get(1));
// console.log(list.set(1, 'update item 1'));

// list.insert(0, 'insert to head')
// list.insert(list.length, 'insert to tail')

// list.insert(1, "the second item");

list.remove(0);
list.remove(0);
list.remove(0);
list.remove(0);
list.remove(0);
list.remove(1);

// console.log(list.remove(1));

console.log(list);
