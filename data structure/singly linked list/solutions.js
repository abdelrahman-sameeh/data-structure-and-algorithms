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

console.log(mergeLists(head1, head2));
