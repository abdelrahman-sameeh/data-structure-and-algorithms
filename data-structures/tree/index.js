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

  getRoot() {
    return this.root;
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

  min(root = this.root) {
    if (!root.left) return root.value;
    else return this.min(root.left);
  }

  remove(value) {
    function removeNode(root, value) {
      if (!root) return root;
      if (value > root.value) {
        root.right = removeNode(root.right, value);
      } else if (value < root.value) {
        root.right = removeNode(root.right, value);
      } else {
        if (!root.left && !root.right) return null;
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        } else {
          root.value = this.min(root.right)
          root.right = removeNode(this.root, root.value)
        }
        return root
      }
    }
    this.root = removeNode(this.root, value);
  }

  preOrderTraversal() {
    function main(root, arr) {
      if (root) {
        arr.push(root.value);
        if (root.left) {
          main(root.left, arr);
        }
        if (root.right) {
          main(root.right, arr);
        }
      }
    }
    let arr = [];
    main(this.root, arr);
    return arr.join(" -> ");
  }

  inOrderTraversal() {
    function main(root, arr) {
      if (root) {
        if (root.left) {
          main(root.left, arr);
        }
        arr.push(root.value);
        if (root.right) {
          main(root.right, arr);
        }
      }
    }
    let arr = [];
    main(this.root, arr);
    return arr.join(" -> ");
  }

  postOrderTraversal() {
    function main(root, arr) {
      if (root) {
        main(root.left, arr);
        main(root.right, arr);
        arr.push(root.value);
      }
    }
    let arr = [];
    main(this.root, arr);
    return arr.join(" -> ");
  }

  breadthFirstTraversal(root = this.root) {
    let queue = [];
    const arr = [];
    queue.push(root);
    while (queue.length) {
      let curr = queue.shift();
      arr.push(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    return arr.join(" -> ");
  }
}

const bt = new BinaryTree(15);

// bt.remove(15);
// console.log(bt.isEmpty());

bt.add(5);
bt.add(3);
bt.add(6);
bt.add(7);
bt.add(8);
bt.add(18);
bt.add(16);
bt.add(20);

console.log(bt.min());
console.log(bt.remove(7));
console.log(bt.breadthFirstTraversal());

// console.log(bt.getSize());
// console.log(bt);

// console.log(bt.search(20));
// console.log(bt.search(21));

// console.log(bt.preOrderTraversal());
// console.log(bt.inOrderTraversal());
// console.log(bt.postOrderTraversal());

// console.log(bt.breadthFirstTraversal());

// bt.remove(15);
