function longestWord(sentence){
    let arr = sentence.split(" ")
    let bigWord = arr[0]
    for(let i of arr){
        if(i.length> bigWord.length){
            bigWord = i
        }
    }
    return bigWord
}

console.log(longestWord("hello guyssss how are you prajwal"))