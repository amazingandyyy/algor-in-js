function binarySearch(arr, key) {
  arr.sort((a,b)=>a-b);
  var min = arr[0];
  var max = arr[arr.length - 1];
  var mid = (min + max) / 2;
  console.log(arr);
  if (min === key || max === key || mid === key) return true;
  else if (key < mid) {
    return binarySearch(arr.slice(0, (arr.length / 2)), key);
  } else if (key > mid) {
    return binarySearch(arr.slice(Math.floor((arr.length / 2))),key);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2));