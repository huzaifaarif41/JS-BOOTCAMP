//ex-01

let num1 = 0;

while (num1 <= 10) {
  console.log(num1);
  num1++;
}

//ex-02

// const target= Math.floor(Math.random()*10)

// let guess= Math.floor(Math.random()*10)

// while(guess!==target){
//     console.log(`Target => ${target} Guess=> ${guess}`)
//     guess= Math.floor(Math.random()*10)
// }
// console.log(`Target => ${target} Guess=> ${guess}`)

// console.log('You Win')

//ex-03
let sum = 0;

let number = parseInt(prompt('Enter a number: ')); //parseInt because prompt take a number in a string so parseInt convert string into number

while (number >= 0) {
  // add all positive numbers
  sum += number;

  // take input again if the number is positive
  number = parseInt(prompt('Enter a number: '));
}

console.log(`The sum is ${sum}.`);
