//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const arr1= ['abc', 'cdd', 'efg', 'hij' , 'klm']

const [a , b, c, ...rest]= arr1

console.log(a)
console.log(b)
console.log(rest)