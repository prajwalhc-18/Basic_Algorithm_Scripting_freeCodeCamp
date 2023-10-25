/* Write a function that takes a sentence (as a string) and returns the word that occurs most frequently.
 If there are multiple words with the same highest frequency, return any of them.*/
function mostFrequentWords(str) {
    let maxCount = 1;
    let frequentWords = [];
    let arr = str.split(" ");

    for (let i of arr) {
        let count = 0;

        for (let j of arr) {
            if (i === j) {
                count += 1;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            frequentWords = [i];
        } else if (count === maxCount && maxCount > 1) {
            frequentWords.push(i);
        }
    }

    if (maxCount > 1) {
        return `${frequentWords.join(', ')} repeated ${maxCount} times`;
    } else {
        return "No repeated words";
    }
}

console.log(mostFrequentWords("The cat and the dog chased the cat"));
