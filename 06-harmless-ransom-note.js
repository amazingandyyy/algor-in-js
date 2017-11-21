// Big O Notation:  O (n) + O (m) /-> O (n+m) or O(n)
// n = noteText.length;
// m = magazinText.length;

function harmlessRansomNote(noteText, magazinText) {
  var noteArr = noteText.split(" ");
  var magazinArr = magazinText.split(" ");
  var magazinObj = {};
  var result = true;

  magazinArr.forEach(w => magazinObj[w] ? magazinObj[w]++ : magazinObj[w] = 1);

  noteArr.forEach(w => {
    if(magazinObj[w]) {
      magazinObj[w]--
      if(magazinObj[w]<0)result=false;
    }
    else result = false;
  })
  console.log(result);
  return result;
}

harmlessRansomNote('Andy is amazing amazing', 'This is the amazing Andy Andy'); // false