/*********************************************************************** */
// 1- Simplify Path >> (Mid level)

// solution 1
var simplifyPath = function (path) {
  path = path.split("/").filter((item) => item != "" && item != ".");
  let stack = [];
  for (const item of path) {
    if (item === "..") {
      stack.pop();
    } else {
      stack.push(item);
    }
  }
  return stack.length ? `/${stack.join("/")}` : "/";
};

// solution 2
var simplifyPath = function (path) {
  path = path.split("/").filter((item) => item != "" && item != ".");
  path.push("/");

  let i = 0;
  while (true) {
    if (path[i] === "/") break;
    if (path[i] === ".." && path[i - 1]) {
      path.splice(i - 1, 2);
      i--;
    } else if (path[i] === ".." && !path[i - 1]) {
      path.splice(i, 1);
    } else {
      i++;
    }
  }
  path.pop();
  return path.length ? `/${path.join("/")}` : "/";
};

// console.log(simplifyPath("/.../a/../b/c/../d/./"));
// console.log(simplifyPath("/../b/../../"));
// console.log(simplifyPath("/..//../"));

/*********************************************************************** */
// 2- Reorder List >> (Mid level)

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/*
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let curr = head,
    targetIndex = 1,
    listCount = 0,
    itr = 0;
  while (true) {
    if (
      (targetIndex === listCount && listCount % 2 != 0) ||
      (targetIndex - 1 === listCount && targetIndex != 1 && listCount % 2 == 0)
    ) {
      break;
    }

    while (curr) {
      curr = curr.next;
      if (itr == 0) {
        listCount++;
      }
    }
    itr = 1;
    if (listCount === 1 || listCount === 2) {
      return head;
    }

    curr = head;
    let lastNode = null;
    while (curr.next && curr.next.next) {
      curr = curr.next;
    }
    lastNode = curr.next;
    curr.next = null;
    curr = head;

    let updatedHead = head,
      prevTarget = null;

    for (let i = 0; i < targetIndex; i++) {
      if (i === targetIndex - 1) {
        prevTarget = updatedHead;
        break;
      }
      updatedHead = updatedHead.next;
    }
    lastNode.next = prevTarget.next;
    prevTarget.next = lastNode;
    targetIndex += 2;
  }

  return head;
};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// head = new ListNode(1, new ListNode(2));

// console.log(reorderList(head));

/*********************************************************************** */

// 3- Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 0) {
    return tokens[0];
  }
  let p1 = 0,
    p2 = 1;
  let result = 0;
  while (tokens.length > 1) {
    let operator = tokens[p2 + 1];
    if (!isNaN(tokens[p1]) && !isNaN(tokens[p2]) && isNaN(operator)) {
      if (["*", "-", "+"].includes(operator)) {
        result = Math.floor(
          eval(`${tokens[p1]} ${tokens[p2 + 1]} ${tokens[p2]}`)
        );
      } else if (operator === "/") {
        result = eval(`${tokens[p1]} ${tokens[p2 + 1]} ${tokens[p2]}`);
        if (result > 0) {
          result = Math.floor(result);
        } else {
          result = Math.ceil(result);
        }
      }
      tokens[p1] = result;
      tokens.splice(p2, 2);
      p1--;
      p2--;
    } else if (!isNaN(tokens[p2 + 1])) {
      p1++;
      p2++;
    }
  }
  return result;
};

// GPT Solution
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      // Push number to the stack
      stack.push(Number(token));
    } else {
      // Pop the top two numbers from the stack
      const b = stack.pop();
      const a = stack.pop();
      let result;

      // Perform the operation
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          result = result > 0 ? Math.floor(result) : Math.ceil(result);
          break;
        default:
          throw new Error(`Invalid operator: ${token}`);
      }

      // Push the result back to the stack
      stack.push(result);
    }
  }

  // The final result will be the only item in the stack
  return stack.pop();
};

// console.log(evalRPN([4, 13, 5, "/", "+", 6, "+"]));
// console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
// console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]));

/*********************************************************************** */

// 4- Min Stack
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let dummy = JSON.parse(JSON.stringify(this.stack));
  return dummy.sort((a, b) => a - b)[0];
};

var obj = new MinStack();
obj.push(5);
obj.push(4);
obj.push(6);

// console.log(obj.getMin());

/*********************************************************************** */
// 5- Binary Search Tree Iterator

//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.root = root;
  this.iterable = [];
  this.initial = true;
};

function inOrder(root) {
  function main(root, arr) {
    if (!root) return;
    main(root.left, arr);
    arr.push(root.val);
    main(root.right, arr);
    return arr;
  }
  let arr = [];
  return main(root, arr);
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (!this.initial && !this.iterable.length) return null;
  if (this.initial) {
    this.initial = false;
    this.iterable = inOrder(this.root);
  }
  return this.iterable.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  if (this.initial) {
    this.initial = false;
    this.iterable = inOrder(this.root);
  }
  return this.iterable.length ? true : false;
};

// GPT Solution
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];
  this._leftmostInorder(root);
};

/**
 * تضيف كل العقد الفرعية الشمال للشجرة للكومة
 * @param {TreeNode} node
 */
BSTIterator.prototype._leftmostInorder = function (node) {
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  // نجيب أصغر عنصر من الشجرة (أعلى حاجة فى الكومة)
  const topmostNode = this.stack.pop();

  // لو العنصر ده له عقدة يمين، نضيف كل عقد الشمال بتاعتها
  if (topmostNode.right) {
    this._leftmostInorder(topmostNode.right);
  }

  return topmostNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

// Your BSTIterator object will be instantiated and called as such:
var obj = new BSTIterator(
  new TreeNode(
    7,
    new TreeNode(3),
    new TreeNode(15, new TreeNode(9), new TreeNode(20))
  )
);
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.hasNext());
// console.log(obj.next());
// console.log(obj.hasNext());

// var param_2 = obj.hasNext();

/*********************************************************************** */
// 6- Basic Calculator II

// Time limited Exceeded
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [];
  // remove white spaces
  s = s.trim("");
  for (const char of s) {
    if (!stack.length) {
      stack.push(+char);
    } else if (char != " ") {
      if (isNaN(char)) {
        stack.push(char);
      } else if (!isNaN(stack[stack.length - 1])) {
        stack[stack.length - 1] = +`${stack[stack.length - 1]}${char}`;
      } else if (isNaN(stack[stack.length - 1])) {
        stack.push(+char);
      }
    }
  }

  // p as pointer
  let p = 0;
  while (p != stack.length - 1) {
    if (stack[p] === "*") {
      num1 = stack[p - 1];
      num2 = stack[p + 1];
      let result = num1 * num2;
      stack[p - 1] = result;
      stack.splice(p, 2);
      p = p - 1;
    } else if (stack[p] === "/") {
      num1 = stack[p - 1];
      num2 = stack[p + 1];
      let result = Math.floor(num1 / num2);
      stack[p - 1] = result;
      stack.splice(p, 2);
      p = p - 1;
    } else {
      p++;
    }
  }

  if (stack.length == 1) return stack[0];

  p = 0
  while(stack.length>1){
    if(stack[p]==="+"){
      stack[p-1] = stack[p-1]+stack[p+1]
      stack.splice(p, 2)
      p--
    }else if(stack[p]==="-"){
      stack[p-1] = stack[p-1]-stack[p+1]
      stack.splice(p, 2)
      p--
    }else{
      p++
    }
  }
  return stack[0]
};




/**
 * @param {string} s
 * @return {number}
 */
// GPT Solution
var calculate = function (s) {
  s = s.replace(/\s+/g, '');
  
  let stack = [];
  let num = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!isNaN(char)) {
      // تكوين الرقم الحالي
      num = num * 10 + parseInt(char, 10);
    }

    if (isNaN(char) || i === s.length - 1) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        stack.push(Math.trunc(stack.pop() / num)); 
      }

      sign = char;
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};


// console.log(calculate("3+2*2"));
// console.log(calculate(" 3/2 "));
// console.log(calculate(" 3+55 / 2*2*2 /2 "));
// console.log(calculate("1-1"));
