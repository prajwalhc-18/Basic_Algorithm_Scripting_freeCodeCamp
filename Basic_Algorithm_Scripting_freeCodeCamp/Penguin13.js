/* Challenge: Write a function called findLongestWord that takes a string as an 
argument and returns the length of the longest word in the string.

For example, if the input is "The quick brown fox jumped over the lazy dog", 
the function should return 6 because the longest word is "jumped". */
function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let maxLength = words[0].length;

    for (let i = 1; i < words.length; i++) {
        if (maxLength < words[i].length) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

console.log(findLongestWord('my name is pranavi'));

//////////////////////////////////////////////////////////////////

function findLongestWord(sentence) {
    return sentence.split(' ').reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
  }
  
  console.log(findLongestWord('my name is pranavi'));
  