/* Challenge: Implement a function called isPalindromeSentence that takes a sentence as input and returns 
true if the sentence is a palindrome and false otherwise. A palindrome sentence reads the same forward 
and backward, ignoring spaces, punctuation, and capitalization.

For example, if the input is "A man, a plan, a canal, Panama!", the function should return true. */

function isPalindromeSentence(sentence) {
    const cleanedSentence = sentence.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reversedSentence = cleanedSentence.split('').reverse().join('');
  
    return cleanedSentence === reversedSentence;
}
  

console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // Should return true
  