// 1- insertNodeAtTail
function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data)
  if(!head) { 
    head = newNode
    return head
  }
  let current = head;
  while(current.next){
    current = current.next
  }
  current.next = newNode
  return head
}

class SinglyLinkedListNode {
    constructor(data, next){
      this.data = data;
      this.next = next
    }   
}


let head = new SinglyLinkedListNode(1, new SinglyLinkedListNode(2, null))

// console.log(insertNodeAtTail(head, 3));


/*********************************************************************** */
// 2- insertNodeAtHead
function insertNodeAtHead(head, data) {
  const newNode = new SinglyLinkedListNode(data)
  if(!head) { 
    head = newNode
    return head
  }
  newNode.next = head
  head=newNode
  return head
}


head = new SinglyLinkedListNode(1, new SinglyLinkedListNode(2, null))

// console.log(insertNodeAtHead(head, 3));
// console.log(insertNodeAtHead(insertNodeAtHead(head, 3), 4));


/*********************************************************************** */
// 2- insertNodeAtHead
function insertNodeAtPosition(llist, data, position) {
  const newNode = new SinglyLinkedListNode(data, null)
  let current = llist;
  let counter = 0

  while(current.next){
    if(position===counter+1){
      newNode.next=current.next;
      current.next=newNode
      break
    }
    current = current.next
    counter++
  }
  return llist
}

head = new SinglyLinkedListNode(1, new SinglyLinkedListNode(2, new SinglyLinkedListNode(3, null)))

console.log(insertNodeAtPosition(head, 4, 2));

