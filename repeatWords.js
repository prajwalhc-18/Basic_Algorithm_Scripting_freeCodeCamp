function wordFrequency(str) {
  let cleanedStr = str
    .replace(/[.,!?]/g, "")
    .toLowerCase()
    .split(" ");

  // Initialize an object to store word frequencies
  let result = {};

  // Count the frequency of each word
  for (let i = 0; i < cleanedStr.length; i++) {
    let word = cleanedStr[i];
    if (result[word]) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
  }

  return result;
}

let text = "Hello, world! Hello again. World of JavaScript, hello!";
let result = wordFrequency(text);

console.log(result);
