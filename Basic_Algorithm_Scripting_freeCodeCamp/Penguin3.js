/*Return the provided string with the first letter of each word capitalized. Make sure the rest
 of the word is in lower case

For the purpose of this exercise, you should also capitalize connecting words like the and of.*/

function titleCase(str) {
  let arr = [];
  let result = [];

  arr = str.split(" ");

  for (let i in arr) {
    let m = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    result.push(m);
  }

  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
