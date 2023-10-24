/* Challenge: Implement a function called capitalizeWords that takes a sentence as input and 
returns a new sentence where the first letter of each word is capitalized.

For example, if the input is "hello world", the function should return "Hello World".*/
function capWords(sentence){
    return sentence.split(' ').map(n=> n[0].toUpperCase()+n.slice(1)).join(' ')
}
console.log(capWords('I am Prajwal hc'))