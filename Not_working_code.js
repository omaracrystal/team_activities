
//4. Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual work is separated by only one space.


function capitalizeString(word) {
  newWord = word.charAt(0).toUpperCase()+ words.slice(1);
  console.log(newWord);
  return newWord;
}
console.log(capitalizeString("When all the first letters of a string are capitalized it looks like this..."));



function stringCapitalize(str) {
  //convert string to an array
  var wordArr = str.split(" ");
  //new array literal
  var newWordArr= [];
  //loop through the wordArr
  for (var i=0; i<wordArr.length; i++) {
    var captializeWord = string(wordArr[i]);
    newWordArr.push(capitalizeWord);
  }
  return newWordArr.join(" ");
}

console.log(stringCapitalize("I am a just trying to capitalize all the words in this sentence... no big deal no big deal."))




//option 2
function stringCapitalize(string) {
  var words = string.split(" ");
  var firstLetter = words[i].charAt(0);
  var rest = words[i].slice(1);
  for (var array i=0; i<a.length; i++) {
     console.log(length)// Iterates over numeric indexes from 0 to 5, as everyone expects.
  }

  return array.charAt(0).toUpperCase() + this.slice(1);
}

console.log(stringCapitalize("I am a just trying to capitalize all the words in this sentence... no big deal no big deal."));
