class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(rootValue) {
    if (!rootValue) throw new Error("You must add root during initialize tree");
    this.root = new Node(rootValue);
  }

  isEmpty() {
    return !this.root;
  }

  getSize(root = this.root) {
    if (!root) {
      return 0;
    }
    return 1 + this.getSize(root.left) + this.getSize(root.right);
  }

  add(value, root = this.root) {
    if (!root) {
      return new Node(value);
    }
    if (value < root.value) {
      root.left = this.add(value, root.left);
    } else {
      root.right = this.add(value, root.right);
    }
    return root;
  }

  search(value, root = this.root) {
    if (!root) return false;
    if (value === root.value) return true;
    if (value < root) {
      return this.search(value, root.left);
    } else {
      return this.search(value, root.right);
    }
  }
  depth() {}

  preOrderTraversal() {}
  inOrderTraversal() {}
  postOrderTraversal() {}
  breadthFirstTraversal() {}

  remove(node) {}
}

const bt = new BinaryTree(15);

bt.remove(15);
// console.log(bt.isEmpty());

bt.add(5);
bt.add(3);
bt.add(6);
bt.add(18);
bt.add(16);
bt.add(20);

console.log(bt.getSize());
// console.log(bt);

// console.log(bt.search(20));
// console.log(bt.search(21));
