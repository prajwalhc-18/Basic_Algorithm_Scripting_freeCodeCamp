const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];

const sortByScore = (x) => {
  return x.sort((l,k)=>k.age-l.age)
}

console.log(sortByScore(people));


