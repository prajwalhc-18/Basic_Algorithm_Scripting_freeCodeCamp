function many(arr) {
  let times = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        times += 1;
      }
    }
    console.log(`${arr[i]} repeated ${times}`);
  }
}

console.log(many([1, 2, 3, 4, 4, 5, 6, 3, 21, 5, 5, 5, 9]));
