/**
 * Given a linked list and a positive integer k, rotate the list to the right by k places.
 * For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7.
 * Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(3);
const d = new Node(5);
a.next = b;
b.next = c;
c.next = d;

const rotateLinkedList = (head, k) => {
  if (head === null) return null;
  if (k === 0) return head;
  let count = 0;

  let current = head;
  let prevVal = null;
  let newHead = null;
  let lastNode = null;

  while (current !== null) {
    if (count === k) {
      console.log('current ', current)
      newHead = current;
      prevVal.next = null;
    }
     // iterate through the entire list
       // 7 -> 7 -> 3 -> 5 
    count += 1;
    prevVal = current;

    if (current.next === null) {
      lastNode = current;
    }
    current = current.next
  }

  lastNode.next = head;
  return newHead;
}

console.log(rotateLinkedList(a, 2));
