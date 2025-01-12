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
  return dummy.sort((a, b)=>a-b)[0]
};

var obj = new MinStack();
obj.push(5);
obj.push(4);
obj.push(6);

console.log(obj.getMin());
