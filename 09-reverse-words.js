function reverseWords(string) {
  var stringArr = string.split(' ');
  
  var result = stringArr.map(s => {
    var sArr = s.split('');
    var nArr = [];
    sArr.forEach(s=>{
      nArr.unshift(s);
    })
    return nArr.join('');
    // return s.split('').reverse().join('');
  });

  return result.join(' ');
}

console.log(reverseWords('this is a string of words')) //siht si a gnirts fo sdrow