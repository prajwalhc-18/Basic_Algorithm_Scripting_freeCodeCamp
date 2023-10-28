function groupAnagrams(words) {
  const anagrams = {};

  for (const word of words) {
      const key = word.split('').sort().join('');

      if (!anagrams[key]) {
          anagrams[key] = [word];
      } else {
          anagrams[key].push(word);
      }
  }
  return Object.values(anagrams);
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
