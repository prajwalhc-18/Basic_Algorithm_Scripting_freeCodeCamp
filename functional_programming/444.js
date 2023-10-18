/* Function Challenge: lengthsOfLongWords

Write a JavaScript function lengthsOfLongWords that takes an array 
of words as input and returns a new array containing the lengths of words that are 
longer than three letters.

Input:
An array of strings, where each string represents a word.

Output:

An array of integers, where each integer represents the length of a word from 
the input array, but only for words longer than three letters.*/

const lengthOfLongWords = arr =>{
    const ar = []
    for(let i of arr){
        if(i.length>3){
            ar.push(i.length)
        }
    }return ar
}
console.log(lengthOfLongWords(['apple','banana','kiwi','fig','gua',"papaya"]))

//////////////////////////////////////////////////////////////////////////////////////////////

const lengthOfLongWordss = arr =>arr.filter(n=> n.length>3).map(n=> n.length)


console.log(lengthOfLongWordss(['apple','banana','kiwi','fig','gua',"papaya"]))