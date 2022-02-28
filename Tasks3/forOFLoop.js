// const sports= ['Soccer', 'Cricket', 'Football', 'hockey']

// // for(let i=0 ; i<sports.length; i++){
// //     console.log(sports[i])
// // }
// //Alternate is ForOF loop
//The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).

//ex-01
// for(let names of sports){
//     console.log(names)
// }

//ex-02

// for(let characs of 'huzaifa arif'){
//     console.log(characs.toUpperCase())
// }

//ex-03

// function* generatorFunc() {

//     yield 10;
//     yield 20;
//     yield 30;
// }

// const obj = generatorFunc();

// for (let value of obj) {
//     console.log(value);
// }

//ex-04
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
