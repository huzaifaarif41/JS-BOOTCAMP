//callback funcs

//it is a function which passed in another func as an argument.
//The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.
//01

// function name (){
//     console.log('HELLO')
// }

// function greet (callback){
//     callback()
// }
// greet(name)

//02

// function show(a)
// {
//     console.log('I am function' + a)
// }

// function res (callback)
// {
//     var a=100
//     callback(a)
// }

// res(show)

//ex-03

// function show (callback){
//     var a=100
//     callback(a)
// }

// show(a=> console.log('the number is' +a))

//ex-04
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Huzaifa', callMe);

//ex-5

function greet(name, myFunction) {
  console.log('Hello world');

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'HuzaiFaa', sayName);

const sum = async (a, b) => {
  const result = a + b;
  console.log(result);
};
sum(5, 6);

console.log('abvvv');
