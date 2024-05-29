function many(arr) {
  for (let i = 0; i < arr.length; i++) {
    let times = 1; // Reset times for each element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        times += 1;
      }
    }
    console.log(`${arr[i]} repeated ${times} time(s)`);
  }
}

console.log(many([1, 2, 3, 4, 4, 5, 6, 3, 21, 5, 5, 5, 9]));
