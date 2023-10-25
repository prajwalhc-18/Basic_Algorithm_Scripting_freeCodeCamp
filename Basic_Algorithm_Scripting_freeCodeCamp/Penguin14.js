/* Challenge: Write a function called chunkArray that takes an array and a chunk size as arguments and returns 
a new array of chunks. Each chunk in the new array should have a length equal to the specified chunk size.

For example, if the input is [1, 2, 3, 4, 5, 6, 7, 8] with a chunk size of 3, 
the function should return [[1, 2, 3], [4, 5, 6], [7, 8]].
*/

function chunkArray(arr, chunk) {
    let result = [];
    
    while (arr.length > 0) {
        result.push(arr.splice(0, chunk));
    }

    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));


/////////////////////////////////////////////////////////////////////////

function chunkArray(arr, chunk) {
    let result = [];
    
    for (let i = 0; i < arr.length; i += chunk) {
        result.push(arr.slice(i, i + chunk));
    }

    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));
