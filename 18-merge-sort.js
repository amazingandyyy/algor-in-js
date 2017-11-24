// function mergeSort(array) {
//   for (var i = 0; i < array.length; i += 2) {
//     merge(array[i], array[i + 1]);
//   }
// }

// function merge(array1, array2) {
//   var result = [];
//   var temp;
//   for (var i = 0; i < max(array1.length, array2.length); i++) {
//     if (array1[i] <= array2[i]) {
//       result.push(array1[i])
//       temp = array2[i]
//     } else if (array1[i] > array2[i]) {
//       result.push(array2[i])
//       temp = array2[i]
//     }
//   }
// }

// // console.log(mergeSort([3,5,8,20], [1,2,12,17]));
// console.log(mergeSort([11, 7, 4, 1, 15, 12, 3]));