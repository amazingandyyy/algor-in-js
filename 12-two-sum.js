// Big O Notation:  O (N)

function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterPart = sum-currNum;
    if(hashTable.indexOf(counterPart)>-1) pairs.push([currNum, counterPart]);
    else hashTable.push(currNum);
  }

  return pairs;
}

console.log(twoSum([1,6,4,5,3,3], 7));