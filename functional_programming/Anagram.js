function spliting(word) {
  let merge = /\s/g;
  return word.split("").sort().join("").replace(merge, "")
}


function isAnagram(a, b) {
  const firstWord = spliting(a);
  const secondWord = spliting(b);

  return firstWord === secondWord;
}

console.log(isAnagram("hii hello", "hello hii"));


