// Binary Search Tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let root = this.root;
    const newNode = new Node(value);
    if (!root) {
      this.root = newNode;
      return this;
    } else {
      while (true) {
        if (root.value < value) {
          if (root.right == null) {
            root.right = newNode;
            return this;
          } else {
            root = root.right;
          }
        } else if (root.value > value) {
          if (root.left == null) {
            root.left = newNode;
            return this;
          } else {
            root = root.left;
          }
        } else {
          console.log("this value already exist in tree");
          return false;
        }
      }
    }
  }

  find(value) {
    let current = this.root;
    if (!current) return false;
    else {
      while (true) {
        if (current.value < value) {
          if (current.right == null) {
            return false;
          } else {
            current = current.right;
          }
        } else if (current.value > value) {
          if (current.left == null) {
            return false;
          } else {
            current = current.left;
          }
        } else {
          return current;
        }
      }
    }
  }

  // DFS (Depth First Search) >> deferent technics
  preOrder(root, result = []) {
    if (root) {
      result.push(root.value);
      this.preOrder(root.left, result);
      this.preOrder(root.right, result);
    }
    return result;
  }

  inOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log(root.value);
    }
  }

  // BFS (Breadth First Search) >> level order
  levelOrder() {
    let queue = [],
      result = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      result.push(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    console.log(result);
  }
}

const tree = new BST();

tree.insert(15);
tree.insert(19);
tree.insert(25);
tree.insert(7);
tree.insert(8);
tree.insert(1);
// console.log(tree.find(3));
// console.log(tree);

//            15
//          7    19
//        1   8    25
// console.log(tree.preOrder(tree.root));
tree.levelOrder();
