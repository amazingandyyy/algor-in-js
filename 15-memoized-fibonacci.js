function fibonacci(num, dict = {}) {
  if(dict[num]) return dict[num];
  if(num===1 || num===2) return 1;
  return dict[num] = fibonacci(num-1, dict) + fibonacci(num-2, dict);
}

function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

console.log(fibonacci(100));
console.log(fibMemo(100));