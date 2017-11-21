// Big O Notation:  O (1)

class HashTable {
  constructor(size) {
    this.bucket = Array(size);
    this.numBucket = this.bucket.length;
  }
  hash(key) {
    var total = key.split("").reduce((curr, next) => curr + next.charCodeAt(0), 0);
    return total % this.numBucket;
  }
  insert(key, value) {
    var index = this.hash(key);
    if (!this.bucket[index])
      this.bucket[index] = new HashNode(key, value);
    else if (this.bucket[index].key === key) {
      // update value if it's already exist
      this.bucket[index].value = value;
    }
    else {
      var currentNode = this.bucket[index];
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          // in order to check the last element in this while loop
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
    }
  }
  get(key) {
    var index = this.hash(key);
    if (!this.bucket[index]) return null;
    if (this.bucket[key] === key) return this.bucket[key];
    else {
      var currentNode = this.bucket[index];
      while (currentNode) {
        if (currentNode.key === key) return currentNode;
        currentNode = currentNode.next;
      }
      return null;
    }
  }
  retriveAll() {
    var result = [];
    for (var i=0 ; i < this.numBucket; i++){
        var currentNode = this.bucket[i];
        while(currentNode) {
          result.push(currentNode);
          currentNode = currentNode.next;
        }
    }
    return result;
  }
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

var myHT = new HashTable(30);

myHT.insert('Andy', 'andy@mail.com');
myHT.insert('Nady', 'nady@mail.com');
myHT.insert('Bob', 'bob@mail.com');

console.log('old', myHT);

myHT.insert('Andy', 'andy-new@mail.com');
// console.log('new', myHT);

// console.log(myHT.get("Nayd")); // null
// console.log(myHT.get("Andy")); // 'andy-new@mail.com'
console.log('retriveAll', myHT.retriveAll());