function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length/2; i++) {
    var tempElm = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = tempElm;
  }
  return arr;
}

console.log(reverseArrayInPlace(['andy', 'is', 'amazing', 'and', 'smart']));