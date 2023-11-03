const flatArray = arr =>{
    let flat = []
    for(let i of arr){
        if(Array.isArray(i)){
            flat.push(...flatArray(i));
        }else{
            flat.push(i)
        }
    }return flat
}

console.log(flatArray([6666,[1,2,3,4,[25,32]],2525]))