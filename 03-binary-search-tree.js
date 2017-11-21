// Big O Notation:  O (log(n))

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value <= this.value) {
      if (!this.left)
        this.left = new BST(value);
      else
        this.left.insert(value);
    }
    else if (value > this.value) {
      if (!this.right)
        this.right = new BST(value);
      else
        this.right.insert(value);
    }
  }
  contains(value) {
    if (value === this.value)
      return true;
    else if (value <= this.value) {
      if (!this.left)
        return false;
      else
        return this.left.contains(value);
    }
    else if (value > this.value) {
      if (!this.right)
        return false;
      else
        return this.right.contains(value);
    }
  }
  depthFirstTraversal(iteratorFunc, order) {
    if (order === 'pre-order')
      iteratorFunc(this.value); // print the parent first
    if (this.left)
      this.left.dethFirstTraversal(iteratorFunc, order);
    if (order === 'in-order')
      iteratorFunc(this.value); // print from smallest to biggest
    if (this.right)
      this.right.dethFirstTraversal(iteratorFunc, order);
    if (order === 'post-order')
      iteratorFunc(this.value); // print children first
  }
  breadthFirstTraversal(iteratorFunc) {
    // level by level
    var queue = [this];
    while (queue.length) {
      var treeNode = queue.shift();
      iteratorFunc(treeNode);
      if (treeNode.left)
        queue.push(treeNode.left);
      if (treeNode.right)
        queue.push(treeNode.right);
    }
  }
  getMinVal() {
    if (this.left)
      return this.left.getMinVal();
    else
      return this.value;
  }
  getMaxVal() {
    if (this.right)
      return this.right.getMaxVal();
    else
      return this.value;
  }
}


var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

// console.log(bst.contains(20));
// bst.depthFirstTraversal(log, 'post-order');
console.log(bst.getMaxVal());

function log(val) {
  console.log(val);
}