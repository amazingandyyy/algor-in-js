// Big O Notation:  O (N)

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(value) {
    // O(1)
    // add a new head to extend the old head
    var newNode = new Node(value, this.head, null);
    if (this.head)
      this.head.prev = newNode;
    else
      this.tail = newNode;
    this.head = newNode;
  }
  addToTail(value) {
    // O(1)
    var newNode = new Node(value, null, this.tail);
    if (this.tail)
      this.tail.next = newNode;
    else
      this.head = newNode;
    this.tail = newNode;
  }
  removeTheHead() {
    // O(1)
    if (!this.head)
      return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head)
      this.head.prev = null;
    else
      this.tail = null;
    return val;
  }
  removeTheTail() {
    // O(1)
    if (!this.tail)
      return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail)
      this.tail.next = null;
    else
      this.head = null;
    return val;
  }
  searchNodesWithValueOf(val) {
    // O(n)
    var result = [];
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == val)
        result.push(currentNode);
      currentNode = currentNode.next;
    }
    return result;
  }
  updatehNodesWithValueOf(val, newVal) {
    // O(n)
    var targetNodes = this.searchNodesWithValueOf(val);
    targetNodes.forEach((n) => {
      n.value = newVal;
    });
    return targetNodes;
  }
  indexOf(index) {
    var currentNode = this.head;
    var count = 0;
    while (currentNode) {
      if (count == index)
        return currentNode;
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}








// Testing///

var ll = new LinkedList();

ll.addToHead(11); // 4
ll.addToHead(22); // 3
ll.addToHead(33); // 2
ll.addToHead(12); // 1
ll.addToHead(55); // 0

console.log(ll.updatehNodesWithValueOf(11, 88));
// console.log(ll.searchNodesWithValueOf(11));
// console.log(ll.indexOf(2)) // return 33