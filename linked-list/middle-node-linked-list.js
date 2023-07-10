
/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 */
 class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// [1,2,3,4,5]
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

 var middleNode = function(head) {
  let midWay = null;
  let count = 1;
  // [1,2,3,4,5]
  if (head === null) return null;
  // if (head.next === null) return head; // [1]

  let current = head;
  while (current !== null) {
    console.log({
      current: current.val,
      count,
      midWay
    })
    if (count === 1) {
      midWay = current;
    }
    if (count % 2 === 0) {
      midWay = midWay.next;
      console.log('midway ', midWay.val)
    }
    // [1, 2] return 2 count 2
    // [1, 2, 3] return head at 2 count 3
    // [1, 2, 3, 4] return head at 3 count 4

    // increment
    count++; // 2
    current = current.next;
  }

  return midWay
};


console.log('should return [3,4,5] ', middleNode(a))
// console.log('should return [1] ', middleNode(new Node(1)))



