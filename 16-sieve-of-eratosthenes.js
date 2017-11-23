function sieveOfEratosthenes(n) {
  var primesStatus = [];
  for (var i=0; i<=n ; i++) {
    primesStatus[i] = true;
  }
  primesStatus[0] = false;
  primesStatus[1] = false;

  for (var i = 2; i<=Math.sqrt(n); i++) {
    for(var j = 2; j * i <= n; j++) {
      primesStatus[i*j] = false;
    }
  }
  
  var result = [];
  primesStatus.forEach((s, i)=>{
    if(s) result.push(i);
  })
  return result;
}

console.log(sieveOfEratosthenes(300));