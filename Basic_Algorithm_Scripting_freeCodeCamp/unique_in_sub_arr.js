function uniteUnique() {
  let x = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!x.includes(arguments[i][j])) {
        x.push(arguments[i][j]);
      }
    }
  }

  return x;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

