function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Example usage:
let obj = { a: 1, b: { c: 2 } };
let clonedObj = deepClone(obj);
console.log(clonedObj);
