const compose = (f, g) => {
    return num =>{
       return g(f(num))
    }
  };
  
  const square = (x) => x ** 2;
  const multiplyByThree = (x) => x * 3;
  
  const composedFunction = compose(square, multiplyByThree);
  
  console.log(composedFunction(5)); 
  