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

  head = prev;
  return head;
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


function addTwoBigString(n1='', n2='') {
  let carry = 0;
  let result = [];
  
  if(n1.length < n2.length){
    n1= n1.padStart(n2.length, '0')
  }
  if(n2.length < n1.length){
    n2= n2.padStart(n1.length, '0')
  }

  for (let i = n1.length - 1; i >= 0; i--) {
    const sum = parseInt(n1[i]) + parseInt(n2[i]) + carry;
    result.unshift(sum % 10); 
    carry = Math.floor(sum / 10); 
  }

  if (carry > 0) result.unshift(carry);

  return result.join(''); 
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
  let result = addTwoBigString(l1Str.split('').reverse().join(''), l2Str.split('').reverse().join(''))
  result = result.toString().split('').reverse().join('')

  for (const item of result.toString()) {
    const newNode = new ListNode(+item);
    if(!head){
      head=newNode
    }else{
      let current = head;
      while(current.next){
        current = current.next
      }
      current.next = newNode
    }
  }
  return head
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));


l1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1, new ListNode(1, new ListNode(1))))))));
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
var removeNthFromEnd = function(head, n) {
  let listCount = 0;
  let curr = head;
  while(curr){
    listCount++
    curr = curr.next
  }
  if(listCount===1){
    return head=null
  }
  prevIndex=listCount-n-1
  if(prevIndex===-1){
    return head.next
  }
  curr = head
  for (let i = 0; i < prevIndex; i++) {
    curr = curr.next
  }
  curr.next = curr.next.next;
  return head
};

head = new ListNode(5, new ListNode(6, new ListNode(4)));
head = new ListNode(5, new ListNode(6));
// console.log(removeNthFromEnd(head, 1));
