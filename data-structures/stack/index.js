// stack depend on array
class StackWithArray {
  constructor(...data) {
    this.items = data || [];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(...data) {
    this.items = [...this.items, ...data];
    return this.items;
  }

  pop() {
    return this.items.pop();
  }

  // Method to peek at the top element without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }

  printStack() {
    const items = [...this.items];
    console.log("** Start Of Stack");
    items.reverse().forEach((item, index) => {
      console.log(index === 0 ? `Top is ${item}` : `------ ${item}`);
    });
    console.log("** End Of Stack");
  }
}

// const s = new Stack(1, 2, 3);

// s.printStack();
// console.log(s.peek());
// s.push(4, 5, 6)
// s.printStack();

// *---------------------------------------------------*
// Stack Using Linked List

// Ex.
//               top
//                |
// 5 -> 6 -> 7 -> 8
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackWithLinkedList {
  constructor(...data) {
    this.top = null;
    this.count = 0;
    if (data.length) {
      data.forEach((elementData) => {
        this.push(elementData);
      });
    }
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.count++;
  }

  pop() {
    const currentTop = JSON.parse(JSON.stringify(this.top));
    this.top = this.top.next;
    currentTop.next = null;
    this.count--;
    return currentTop;
  }

  peek() {
    const peekNode = JSON.parse(JSON.stringify(this.top))
    peekNode.next=null
    return 'peek node is ' + JSON.stringify(peekNode)
  }

  clear(){
    this.top = null;
    this.count = 0
  }

  printStack() {
    console.log("** Start Of Stack");
    let i = this.count
    while(this.top){
      console.log(i===this.count?`Top is ${this.top.data}`: this.top.data);
      i--;
      this.top = this.top.next
    }
    console.log("** End Of Stack");
  }

}

const s = new StackWithLinkedList(3, 4, 5);

s.push(6);
// console.log(s.pop());
console.log(s.peek());

  s.printStack();

  s.clear();
console.log(s.isEmpty());

