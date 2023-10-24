/* Challenge: Rotate an Array

Write a function in JavaScript that rotates the elements of an array to the right by a given number of steps. 
For example, if you rotate the array [1, 2, 3, 4, 5] by 2 steps, it should become [4, 5, 1, 2, 3].*/

function rotateArray(arr, steps) {
    let lastElement;
    for (let i = 0; i < steps; i++) {
        lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
}

const originalArray = [1, 2, 3, 4, 5, 6];
const rotatedArray = rotateArray(originalArray, 5);

console.log(rotatedArray);


//////////////////////////////////////////////////////////

function rotateArray(arr,steps){
    for(let i=0;i<steps;i++){
        arr.unshift(arr.pop())
    }return arr
}

const originalArray = [1, 2, 3, 4, 5, 6];
const rotatedArray = rotateArray(originalArray, 5);

console.log(rotatedArray);