function translatePigLatin(str) {
  const consonantsRegex = /^[^aeiou]+/;
  const vowelsRegex = /^[aeiou]/;

  if (consonantsRegex.test(str)) {
    const consonantCluster = str.match(consonantsRegex)[0];
    return str.replace(consonantsRegex, "") + consonantCluster + "ay";
  } else if (vowelsRegex.test(str)) {
    return str + "way";
  }
}

console.log(translatePigLatin("aconsonant"));
