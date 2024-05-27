function findLongestWord(sentence) {
  let x = sentence.split(" ")
  let longWord = x[0]
  for(let i of x) {
    if(i.length>longWord.length){
      longWord = i
    }
  }
  return longWord
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function findLongestWord(sentence) {
  let x = sentence.split(" ");
  return x.reduce((longWord, current) => longWord.length < current.length ? current:longWord,x[0]);
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("Hello world")); // Output: "Hello"
console.log(findLongestWord("JavaScript is awesome")); // Output: "JavaScript"
