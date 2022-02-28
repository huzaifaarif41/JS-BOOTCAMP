const fruits= {
    first: 'Apple',
    second: 'banana',
    third: 'Grapes'
}

const {first, second} =fruits

// console.log(first) //Apple
// console.log(fourth) //undefined //the variable names must be key names in the object but we changed property if we wanted to

const {third:thirdFruit}= fruits

console.log(thirdFruit) //grapes

//ex-02

const runner= {
    first: 'Huzaifa',
    last: 'Arif',
    country: 'Pakistan',
    title: 'abcd'
}
// const {first, last} = runner

// console.log(first) //Huzaifa

const {first, last, ...other}= runner

console.log(first) //Huzaifa
console.log(last) // Arif
console.log(other) //{country: 'Pakistan', title: 'abcd'}

//ex-03
const rubiksCubeFacts = {
    possiblePermutations: '43,252,003,274,489,856,000',
    invented: '1974',
    largestCube: '17x17x17'
  };
  const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
  console.log(possiblePermutations); // '43,252,003,274,489,856,000'
  console.log(invented); // '1974'
  console.log(largestCube); // '17x17x17'



  //nested Destructuring

const bioData= {
    name: 'Huzaifa',
    age: 23,
    education: {
        degree: 'BSCS',
        inter: 'passed'
    }
}

const {name,age}= bioData

console.log(name)

 
const {education: {degree}} = bioData

console.log(degree)
