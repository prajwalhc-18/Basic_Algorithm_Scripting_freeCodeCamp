/* Function Challenge: wordLengths

Write a JavaScript function wordLengths that takes an array of words as input and 
returns an object where the keys are the words, and the values are the lengths 
of the corresponding words.

Input:

An array of strings, where each string represents a word.
Output:

An object where the keys are the words from the input array, and the values are 
the lengths of the corresponding words.*/

const wordLengths = (arr) => {
    let myObj = {};
    for (let word of arr) {
        myObj[word] = word.length;
    }
    return myObj;
};

console.log(wordLengths(['apple', 'kiwi', 'mango', 'gua']));
