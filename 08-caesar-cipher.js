function caesarCipher(str, num) {
  var alphArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var strArr = str.toLowerCase().split('');
  var resulrArr = strArr.map(s=>{
    if (s === ' ') return ' ';
    var i = (alphArr.indexOf(s) + num) % alphArr.length;
    return alphArr[i];
  })
  return resulrArr.join('');
}

console.log(caesarCipher("Zoo keeper", 2)); // bqq mggrgt