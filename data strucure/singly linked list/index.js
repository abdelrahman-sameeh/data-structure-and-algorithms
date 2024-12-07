class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  getFirst() {
    return this.head
      ? {
          first: {
            data: this.head.data,
          },
        }
      : null;
  }

  getLast() {
    return this.tail
      ? {
          last: {
            data: this.tail.data,
          },
        }
      : null;
  }

  addToFirst(data) {
    const newNode = new Node(data);
    const head = this.head;
    this.count++;
    if (!head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = head;
      this.head = newNode;
      this.tail = newNode;
    }
    return newNode;
  }

  addToLast(data) {
    const newNode = new Node(data);
    let head = this.head;
    this.count++;
    if (!head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      while (head.next) {
        head = head.next;
      }
      head.next = newNode;
      this.tail = newNode;
    }
    return newNode;
  }

  append(data) {
    const head = this.head;
    if (!head) {
      return this.addToFirst(data);
    } else {
      return this.addToLast(data);
    }
  }

  search(item) {
    let head = this.head;
    if (!head) return false;
    while (head) {
      if (head.data === item) return true;
      head = head.next;
    }
    return false;
  }

  delete(item) {
    if (!this.head) return false;

    // Handle the case where the head node is the one to be deleted
    if (this.head.data === item) {
      this.head = this.head.next;
      this.count--;
      if (this.count === 0) {
        this.tail = null;
      }
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === item) {
        current.next = current.next.next;
        this.count--;
        if (this.count === 0) {
          this.tail = null;
        } else if (!current.next) {
          this.tail = current; // If the last node was deleted, update the tail
        }
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data; // Add the node's data
      if (current.next) {
        result += " -> "; // Add ' -> ' between nodes, but not after the last node
      }
      current = current.next; // Move to the next node
    }
    console.log(result);
  }


  reverse(){
    let prev = null;
    let curr = this.head;
    let next = null;

    while(curr){
      next = curr.next;
      curr.next = prev
      prev = curr;
      curr = next
    }
    this.head = prev
  }

}

// example
const sll = new SinglyLinkedList();

sll.addToFirst(5);
sll.append(1);
sll.append(2);
sll.append(3);
sll.addToFirst(2);
sll.addToLast(10);
sll.append(11);

console.log(sll);

console.log(sll.getFirst());
console.log(sll.getLast());
console.log(sll.search(10));
console.log(sll.search(60));

sll.printList();
sll.reverse();
sll.printList();


console.log(sll.delete(2));
console.log(sll.delete(1));
console.log(sll.delete(5));
console.log(sll.delete(10));
console.log(sll.delete(11));

sll.printList();
