const deepEqual = (x, y) => {
  if (x === y) {
    return true;
  }

  if (
    typeof x !== "object" ||
    x === null ||
    typeof y !== "object" ||
    y === null
  ) {
    return false;
  }

  const keysX = Object.keys(x);
  const keysY = Object.keys(y);

  if (keysX.length !== keysY.length) {
    return false;
  }

  for (let key of keysX) {
    if (!keysY.includes(key)) {
      return false;
    }

    if (!deepEqual(x[key], y[key])) {
      return false;
    }
  }

  return true;
};

const obj1 = { a: 1, b: { c: 3 } };
const obj2 = { a: 1, b: { c: 3 } };
const obj3 = { a: 1, b: { c: 2 } };

console.log(deepEqual(obj1, obj2)); // Output: true
console.log(deepEqual(obj1, obj3)); // Output: false
