function uniqFlatArr(arr){
    let x = arr.flat(2)
    let y = new Set(x)
    return Array.from(y)
}

let z = [50, 50,50,2,[1, 2, 3, 5,50, 50], [10, 1, 12, [14, 15,5, 16]]];

console.log(uniqFlatArr(z));

/////////////////////__OR__////////////////////////////

const uniqFlatArr = arr => [...new Set(arr.flat(2))];

let z = [50, 50, 50, 2, [1, 2, 3, 5, 50, 50], [10, 1, 12, [14, 15, 5, 16]]];

console.log(uniqFlatArr(z));
