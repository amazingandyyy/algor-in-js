// 02 Recursion
// The recursion function will call itself until the basecase is satisfied

// function func() {
//   if(/*base case*/) {
//     return /*something*/;
//   }else{
//      /*resursive case*/
//     return func();
//   }
// };

// Factorial function
function factorial(num){
  if (num === 1) {
    return num;
  }else{
    return num * factorial(num-1);
  }
}

console.log(factorial(5));