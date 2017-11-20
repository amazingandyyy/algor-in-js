// 01 Linked List

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  // O(1)
  // add a new head to extend the old head
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
  // O(1)
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeTheHead = function() {
  // O(1)
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;

  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTheTail = function() {
  // O(1)
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

LinkedList.prototype.searchNodesWithValueOf = function(val) {
  // O(n)
  var result = [];
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value == val) result.push(currentNode);
    currentNode = currentNode.next;
  }
  return result;
}

LinkedList.prototype.updatehNodesWithValueOf = function(val, newVal) {
  // O(n)
  var targetNodes = this.searchNodesWithValueOf(val);
  targetNodes.forEach((n)=>{
    n.value = newVal;
  })
  return targetNodes;
}

LinkedList.prototype.indexOf = function(index) {
  var currentNode = this.head;
  var count = 0;
  while(currentNode) {
    if (count == index) return currentNode;
    count ++;
    currentNode = currentNode.next;
  }
  return currentNode;
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