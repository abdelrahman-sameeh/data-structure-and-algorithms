
// Helper Functions
function printLinkedList(head) {
  let current = head; // بداية من العقدة الرأسية
  const result = []; // مصفوفة لتجميع القيم

  while (current) {
    result.push(current.val); // أضف القيمة الحالية إلى المصفوفة
    current = current.next; // انتقل إلى العقدة التالية
  }

  console.log(result.join(" -> ")); // طباعة القيم بشكل مرتب
}

function printLevels(root) {
  let node = root;
  while (node) {
    let curr = node;
    let level = [];
    while (curr) {
      level.push(curr.val);
      curr = curr.next;
    }
    console.log(level.join(" -> ") + " -> null");
    node = node.left;
  }
}


// 1- insertNodeAtTail
function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  if (!head) {
    head = newNode;
    return head;
  }
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}

class SinglyLinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let head = new SinglyLinkedListNode(1, new SinglyLinkedListNode(2));

// console.log(insertNodeAtTail(head, 3));

/*********************************************************************** */
// 2- insertNodeAtHead
function insertNodeAtHead(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  if (!head) {
    head = newNode;
    return head;
  }
  newNode.next = head;
  head = newNode;
  return head;
}

head = new SinglyLinkedListNode(1, new SinglyLinkedListNode(2));

// console.log(insertNodeAtHead(head, 3));
// console.log(insertNodeAtHead(insertNodeAtHead(head, 3), 4));

/*********************************************************************** */
// 3- insertNodeAtHead
function insertNodeAtPosition(llist, data, position) {
  const newNode = new SinglyLinkedListNode(data, null);
  let current = llist;
  let counter = 0;

  while (current.next) {
    if (position === counter + 1) {
      newNode.next = current.next;
      current.next = newNode;
      break;
    }
    current = current.next;
    counter++;
  }
  return llist;
}

// head = new SinglyLinkedListNode(1, new SinglyLinkedListNode(2, new SinglyLinkedListNode(3, null)))

// console.log(insertNodeAtPosition(head, 4, 2));

/*********************************************************************** */
// 4- deleteNode
function deleteNode(llist, position) {
  if (position === 0) {
    return llist.next;
  }

  let current = llist,
    counter = 0;

  while (current.next) {
    if (position === counter + 1) {
      current.next = current.next.next;
      break;
    }
    counter++;
    current = current.next;
  }
  return llist;
}

head = new SinglyLinkedListNode(
  1,
  new SinglyLinkedListNode(2, new SinglyLinkedListNode(3, null))
);

// console.log(deleteNode(head, 0));

/*********************************************************************** */
// 5- reversePrint
function reversePrint(head) {
  let reversedHead = reverse(head);

  while (reversedHead) {
    console.log(reversedHead.data);
    reversedHead = reversedHead.next;
  }
}

head = new SinglyLinkedListNode(
  1,
  new SinglyLinkedListNode(2, new SinglyLinkedListNode(3, null))
);

// another solution with recursive
function reversePrint(head) {
  if (!head) {
    return;
  }

  reversePrint(head.next);
  console.log(head.data);
}

// reversePrint(head);

/*********************************************************************** */
// 6- reverse
function reverse(head) {
  let prev = null,
    current = head,
    next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// console.log(reverse(head));

/*********************************************************************** */
// 7- Compare two lists
function CompareLists(head1, head2) {
  while (head1 && head2) {
    if (head1.data != head2.data) return 0;
    head1 = head1.next;
    head2 = head2.next;
  }
  if (head1 || head2) {
    return 0;
  }
  return 1;
}

// same data
let head1 = head;
let head2 = head;
// console.log(CompareLists(head1, head2));

// different data
head1 = head;
head = new SinglyLinkedListNode(
  1,
  new SinglyLinkedListNode(
    2,
    new SinglyLinkedListNode(3, new SinglyLinkedListNode(4, null))
  )
);
head2 = head;

// console.log(CompareLists(head1, head2));

/*********************************************************************** */
// 8- mergeLists

function addNewNode(head, newNode) {
  if (!head) {
    return newNode;
  }
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}

function mergeLists(head1, head2) {
  let result = null;
  let targetNode = null;
  while (head1 && head2) {
    if (head1.data < head2.data) {
      targetNode = JSON.parse(JSON.stringify(head1));
      targetNode.next = null;
      head1 = head1.next;
      result = addNewNode(result, targetNode);
    } else {
      targetNode = JSON.parse(JSON.stringify(head2));
      targetNode.next = null;
      head2 = head2.next;
      result = addNewNode(result, targetNode);
    }
  }

  if (head1) {
    result = addNewNode(result, head1);
  }

  if (head2) {
    result = addNewNode(result, head2);
  }

  return result;
}

head1 = new SinglyLinkedListNode(
  0,
  new SinglyLinkedListNode(3, new SinglyLinkedListNode(7))
);
head2 = new SinglyLinkedListNode(1, new SinglyLinkedListNode(2));

// console.log(mergeLists(head1, head2));

/*********************************************************************** */
// 9- getNode

function getNode(head, positionFromTail) {
  const dict = {};
  let i = 0;
  while (head) {
    dict[i] = head.data;
    i++;
    head = head.next;
  }
  // this to make i 0 based indexing
  i = i - 1;
  return dict[i - positionFromTail];
}

head = new SinglyLinkedListNode(
  1,
  new SinglyLinkedListNode(
    2,
    new SinglyLinkedListNode(3, new SinglyLinkedListNode(4, null))
  )
);

// console.log(getNode(head, 0));
// console.log(getNode(head, 1));
// console.log(getNode(head, 2));
// console.log(getNode(head, 3));

/*********************************************************************** */
// 10- cycleDetection
function hasCycle(head) {
  const dict = {};
  let current = head;
  while (current) {
    if (!dict[current.data]) {
      dict[current.data] = 1;
    } else {
      dict[current.data]++;
      return 1;
    }
    current = current.next;
  }
  return 0;
}

head = new SinglyLinkedListNode(
  1,
  new SinglyLinkedListNode(
    2,
    new SinglyLinkedListNode(3, new SinglyLinkedListNode(4, null))
  )
);

// console.log(hasCycle(head));

head = new SinglyLinkedListNode(
  1,
  new SinglyLinkedListNode(
    2,
    new SinglyLinkedListNode(1, new SinglyLinkedListNode(4, null))
  )
);

// console.log(hasCycle(head));

// *******************************************************************
// 11 - addTwoNumbers
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoBigString(n1 = "", n2 = "") {
  let carry = 0;
  let result = [];

  if (n1.length < n2.length) {
    n1 = n1.padStart(n2.length, "0");
  }
  if (n2.length < n1.length) {
    n2 = n2.padStart(n1.length, "0");
  }

  for (let i = n1.length - 1; i >= 0; i--) {
    const sum = parseInt(n1[i]) + parseInt(n2[i]) + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) result.unshift(carry);

  return result.join("");
}

const addTwoNumbers = function (l1, l2) {
  let l1Str = "",
    l2Str = "";
  while (l1 && l2) {
    l1Str += l1.val;
    l2Str += l2.val;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    l1Str += l1.val;
    l1 = l1.next;
  }
  while (l2) {
    l2Str += l2.val;
    l2 = l2.next;
  }

  let head;
  let result = addTwoBigString(
    l1Str.split("").reverse().join(""),
    l2Str.split("").reverse().join("")
  );
  result = result.toString().split("").reverse().join("");

  for (const item of result.toString()) {
    const newNode = new ListNode(+item);
    if (!head) {
      head = newNode;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  return head;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

l1 = new ListNode(
  1,
  new ListNode(
    0,
    new ListNode(
      0,
      new ListNode(
        0,
        new ListNode(0, new ListNode(1, new ListNode(1, new ListNode(1))))
      )
    )
  )
);
l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// console.log(addTwoNumbers(l1, l2));

// *******************************************************************
// 12- Remove Nth Node From End of List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let listCount = 0;
  let curr = head;
  while (curr) {
    listCount++;
    curr = curr.next;
  }
  if (listCount === 1) {
    return (head = null);
  }
  prevIndex = listCount - n - 1;
  if (prevIndex === -1) {
    return head.next;
  }
  curr = head;
  for (let i = 0; i < prevIndex; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
};

head = new ListNode(5, new ListNode(6, new ListNode(4)));
head = new ListNode(5, new ListNode(6));
// console.log(removeNthFromEnd(head, 1));

// *******************************************************************
// 13- Swap Nodes in Pairs
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let firstNode = head;
  let secondNode = head.next;

  firstNode.next = swapPairs(secondNode.next);

  secondNode.next = firstNode;

  return secondNode;
};

head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  )
);

// console.log(swapPairs(head));

// *******************************************************************
// 14- Rotate List
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// bad solution BigO(n^2)
// var rotateRight = function(head, k) {
//   if(!head || !head.next) return head
//   function rotate(head){
//     let lastEle = null
//     let curr1 = head;
//     let curr2 = head;
//     while(curr1?.next?.next){
//       curr1 = curr1?.next
//     }
//     lastEle = curr1.next
//     curr1.next = null
//     lastEle.next = curr2
//     return lastEle
//   }

//   while(k--){
//     head=rotate(head)
//   }

//   return head
// };

var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  // get length of Linked list
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  let targetNodeIndex = k % length;

  if (targetNodeIndex === 0) return head;

  // get prev node
  let prevTarget = head;
  length--;
  while (length - targetNodeIndex) {
    length--;
    prevTarget = prevTarget.next;
  }

  // get last element in target node and make connections
  let target = prevTarget.next;
  prevTarget.next = null;
  let lastEme = target;
  while (lastEme && lastEme.next) {
    lastEme = lastEme.next;
  }
  lastEme.next = head;
  head = target;

  return head;
};

head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// console.log(rotateRight(head, 200000));

// *******************************************************************
// 15- Remove Duplicates from Sorted List II
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  if (!head) return null;

  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      let val = curr.val;
      while (curr && curr.val === val) {
        curr = curr.next;
      }
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;
};

// head = new ListNode(
//   1,
//   new ListNode(
//     2,
//     new ListNode(
//       3,
//       new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5))))
//     )
//   )
// );
head = new ListNode(
  1,
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(3))))
  )
);

// console.log(deleteDuplicates(head));

// *******************************************************************
// 16- Partition List

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// NOT WORK
// var partition = function (head, x) {
//   if (!head) return head;

//   let prev = head;
//   let curr = head;
//   let foundPrev = false;
//   while (curr&&curr.next) {
//     if (prev.next.val >= x && foundPrev===false) {
//       foundPrev = true;
//       continue
//     }
//     if (foundPrev === false) {
//       prev = prev.next;
//       curr = curr.next;
//       continue
//     }
//     if(curr&&curr?.next?.val>=x){
//       curr=curr.next
//     }else if(curr&&curr?.next?.val<x){
//       let tmp = curr.next;
//       curr.next = tmp.next;
//       tmp.next=prev.next;
//       prev.next = tmp
//     }
//   }
//   return prev
// };

// WORK
var partition = function (head, x) {
  if (!head) return head;

  let dummy1 = new ListNode(0);
  let dummy2 = new ListNode(0);
  let less = dummy1;
  let greater = dummy2;

  while (head) {
    if (head.val < x) {
      less.next = head;
      less = less.next;
    } else {
      greater.next = head;
      greater = greater.next;
    }
    head = head.next;
  }

  greater.next = null;
  less.next = dummy2.next;

  return dummy1.next;
};

head = new ListNode(
  2,
  new ListNode(
    1,
    new ListNode(
      4,
      new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))
    )
  )
);
// head = new ListNode(
//   2,
//   new ListNode(
//     1,
//   )
// );

// console.log(partition(head, 3));

// *******************************************************************
// 17- Reverse Linked List II

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val === undefined ? 0 : val;
 *     this.next = next === undefined ? null : next;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left >= right) return head;

  let dummy = new ListNode(0, head);
  let prev = dummy;

  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  let current = prev.next;
  let next = null;
  let prevReversed = null;

  for (let i = 0; i <= right - left; i++) {
    next = current.next;
    current.next = prevReversed;
    prevReversed = current;
    current = next;
  }

  prev.next.next = current;
  prev.next = prevReversed;

  return dummy.next;
};

head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// console.log(printLinkedList(reverseBetween(head, 2, 4)));

// *******************************************************************
// 18- Convert Sorted List to Binary Search Tree

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function (head) {
  function findMiddle(left, right) {
    let slow = left;
    let fast = left;

    while (fast !== right && fast.next !== right) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  function buildTree(left, right) {
    if (left === right) return null;

    const mid = findMiddle(left, right);
    const root = new TreeNode(mid.val);

    root.left = buildTree(left, mid);
    root.right = buildTree(mid.next, right);

    return root;
  }

  return buildTree(head, null);
};

head = new ListNode(
  -10,
  new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9))))
);

// console.log(sortedListToBST(head));

// *******************************************************************
// 19- Flatten Binary Tree to Linked List

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
  let prev = null;

  function preOrder(node) {
    if (!node) return;

    preOrder(node.right);
    preOrder(node.left);

    // Modify the current node
    node.right = prev;
    node.left = null;

    // Update `prev` to the current node
    prev = node;
  }

  preOrder(root);
};

let tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(5, null, new TreeNode(6))
);

// console.log(flatten(tree));

// *******************************************************************
// 20- Populating Next Right Pointers in Each Node

function _Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return null;
  const levels = {};

  function levelOrder(head, level) {
    if (!head) return;

    if (!levels[level]) levels[level] = [];
    levels[level].push(head);

    levelOrder(head.left, level + 1);
    levelOrder(head.right, level + 1);
  }

  levelOrder(root, 0);

  Object.values(levels).map((level) => {
    return level.map((node, idx) => (node.next = level[idx + 1] || null));
  });
  return root
};

// GPT Solution
// var connect = function (root) {
//   if (!root) return null; // إذا كانت الشجرة فارغة

//   let queue = [root]; // قائمة انتظار تبدأ بالجذر

//   while (queue.length > 0) {
//     let levelSize = queue.length; // عدد العقد في هذا المستوى

//     // مرر عبر العقد في المستوى الحالي
//     for (let i = 0; i < levelSize; i++) {
//       let node = queue.shift(); // استخرج العقدة الحالية

//       // اربط العقدة بالعقدة التالية إذا لم تكن الأخيرة في المستوى
//       if (i < levelSize - 1) {
//         node.next = queue[0];
//       }

//       // أضف الأبناء إلى قائمة الانتظار
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }

//   return root;
// };



tree = new _Node(
  1,
  new _Node(2, new _Node(3), new _Node(4)),
  new _Node(5, new _Node(6))
);


// console.log(printLevels(connect(tree)));




