
/**
 * Given the head of a linked list, return the node where the cycle
 * begins. If there is no cycle, return null.
 * There is a cycle in a linked list if there is some node
 * in the list that can be reached again by continuously following
 * the next pointer. Internally, pos is used to denote the index
 * of the node that tail's next pointer is connected to (0-indexed).
 * It is -1 if there is no cycle. Note that pos is not passed as a
 * parameter.

Do not modify the linked list.
 */
 class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// [3, 2, 0, -4, ----> 2, 0, -4, etc (cycle)]
const a = new Node(3);
const b = new Node(2);
const c = new Node(0);
const d = new Node(-4);

a.next = b;
b.next = c;
c.next = d;
d.next = b;

 var detectCycle = function(head) {
  // let pos = [];

  // if (head === null) return null;

  // let current = head;
  // while (current !== null) {

  //   if (current.next && pos[current.next.val]) {
  //     return pos[current.next.val]
  //   }

  //   pos[current.val] = current;
  //   current = current.next;
  // }

  // return null;

  let set = new Set();
  let current = head;
  while(current !== null) {
      if(set.has(current)) { return current; }

      set.add(current);
      current = current.next;
  }
  return null;
};


// console.log('should return pos 1 ', ListNode(a))

// [3, 2, 0, -4, ----> 2, 0, -4, etc (cycle)]
const x = new Node(1);
x.next = null;

// [-1,-7,7,-4,19,6,-9,-5,-2,-5]
// 6
const i = new Node(-1);
const j = new Node(-7);
const k = new Node(7);
const l = new Node(-4);
const m = new Node(19);
const n = new Node(6);
const o = new Node(-9);
const p = new Node(-5);
const q = new Node(-2);

i.next = j;
j.next = k;
k.next = l;
l.next = m;
m.next = n;
n.next = o;
o.next = p;
p.next = q;
q.next = p;

console.log('should return pos 1 ', detectCycle(x))
console.log('should return pos 6 ', detectCycle(i))



