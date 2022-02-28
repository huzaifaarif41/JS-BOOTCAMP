//Arrow Functions/ Fat Arrow Functions
//ex01
const name = () => console.log('Huzaifaaa');
name();

//ex02
let hello = x => console.log(x);  //if have one argument, so we omit paranthesis

hello('Hello World');

//ex03
let age = 10;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome();

//ex04

let sum = (a, b) => {
  let result = a + b;
  return result;
};

let addd= sum(60,50)
console.log(addd)

//ex05

const weightCheck = (weight)=>{
    console.log(` Weight of the bag is ${weight} kgs`)
}

weightCheck(65)
