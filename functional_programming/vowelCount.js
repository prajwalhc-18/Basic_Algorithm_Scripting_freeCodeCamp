function countVowels(word) {
  let total = 0;
  const vow = ["a", "e", "i", "o", "u"];
  let lst = word.toLowerCase().split("").sort()
  for (let i of lst) {
    if (vow.includes(i)) {
      total += 1;
    }
  }
  return total;
}

console.log(countVowels("aaaaaaaaaa")); // Output: 2
console.log(countVowels("world")); // Output: 1
console.log(countVowels("AJavaScript")); // Output: 3
console.log(countVowels("OpenAI")); // Output: 3
