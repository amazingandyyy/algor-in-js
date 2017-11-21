function isPalindrame(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharasters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var letterArr = [];
  charactersArr.forEach(c => {
    if (validCharasters.indexOf(c) > -1) letterArr.push(c);
  });
  return (letterArr.join('') === letterArr.reverse().join(''))
}

console.log(isPalindrame("Madam I'm Adam")); // true
console.log(isPalindrame("Race Car")); // true
console.log(isPalindrame("A Race Car")); // false