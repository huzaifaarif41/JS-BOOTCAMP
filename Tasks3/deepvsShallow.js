//https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig

//Shallow Copy
//Shallow copies only cover the 1st level of the array and the rest are referenced.

//Deep Copy
//If you want a true copy of nested arrays, you’ll need a deep clone. For deep clones, go with the JSON way OR better yet use Lodash

const numbers = [1, [2], [3, [4]], 5];

// Using JavaScript
JSON.parse(JSON.stringify(numbers));


 //call by value
let value = 3;
let valueCopy = value; // create copy

console.log(valueCopy); // 3

// Change valueCopy
valueCopy = 100
console.log(valueCopy); // 100

// ✅ Original NOT affected 
console.log(value); // 3

//call by reference

let array = [1,2,3];
let arrayCopy = array; // create copy

console.log(arrayCopy); // [1,2,3];

// Change 1st element of the array
arrayCopy[0] = 'abc';
console.log(arrayCopy); // [ 'abc', 2, 3 ]

// ❌Original got affected
console.log(array); 


 // Solution To copy Reference Types
 //Shallow

 let array = [1,2,3];
let arrayCopy = [...array]; // create TRUE copy

console.log(arrayCopy); // [1,2,3];

// Change 1st element of the array
arrayCopy[0] = '👻';
console.log(arrayCopy); // [ '👻', 2, 3 ]

// ✅ Original NOT affected 
console.log(array); // [ 1, 2, 3 ]

  //Deep 

  let nestedArray = [1, [2], 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray)); 

// Make some changes
arrayCopy[0] = '👻'; // change shallow element
arrayCopy[1][0] = '💩'; // change nested element
console.log(arrayCopy); // [ '👻', [ '💩' ], 3 ]

// ✅ Nested array NOT affected
console.log(nestedArray); //  1, [ 2 ], 3 ]