const transformObject = (obj) => {
   const newObj = {}
   for (const key of Object.keys(obj)) {
      let org = obj[key]
      let newValue = Math.sqrt(org)

      newObj[key] = newValue
   }
   return newObj
}
 
 const inputObject = {
   a: 4,
   b: 9,
   c: 16,
 };
 
 console.log(transformObject(inputObject)); 
 
////////////////////////////// OR  //////////////////////////////////

const transformObject = (obj) => {
   return Object.fromEntries(
     Object.entries(obj).map(([key, value]) => [key, Math.sqrt(value)])
   );
 };
 