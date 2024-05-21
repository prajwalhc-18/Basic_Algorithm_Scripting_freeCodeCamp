const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(words) {
  let map = new Map();

  for (let word of words) {
    let sortedWord = word.split("").sort().join("");

    if (map.has(sortedWord)) {
      map.get(sortedWord).push(word);
    } else {
      map.set(sortedWord, [word]);
    }
  }
  return Array.from(map.values())
}

console.log(groupAnagrams(words));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


