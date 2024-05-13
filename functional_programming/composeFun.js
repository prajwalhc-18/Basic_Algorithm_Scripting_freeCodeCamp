function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

function compose(func1, func2) {
  return function (x) {
    return func2(func1(x));
  };
}

const addOneThenSquare = compose(addOne, square);
console.log(addOneThenSquare(3)); // Output: 16 (square(addOne(3)) = square(4) = 16)
