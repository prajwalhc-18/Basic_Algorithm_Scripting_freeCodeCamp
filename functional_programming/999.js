//Challenge: Implement a Pipe Function

/*Create a pipe function that takes a variable number of functions as arguments and returns a new function.
 The returned function should take an initial value, apply each function in sequence (from left to right), 
 and return the final result.*/

const pipe = (...functions) => {
  return (initialValue) => {
    return functions.reduce((result, func) => func(result), initialValue);
  };
};

//during the first iteration:
//result = initialValue; 
//func = functions[0];    


const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const square = (x) => x*x;
const complexOperation = pipe(addTwo, multiplyByThree,square);

console.log(complexOperation(10)); 
