// //for...in Loop
// The for..in loop in JavaScript allows you to iterate over all property keys of an object.

// //ex-01
// const winnings= {
//     tourns: 5000,
//     matches: 2000,
//     sponsor: 10000
// }

// // for(let prop in winnings){
// //     console.log(prop)
// //     console.log(winnings[prop])
// // }
// let total=0

// for(let prop in winnings){
//     total+= winnings[prop]
// }
//  console.log(`the total amount is ${total}`)

//ex-02
// const student = {
//     name: 'Huzaifa',
//     class: 12,
//     age: 23
// }

// for ( let key in student ) {

//     console.log(`${key} => ${student[key]}`);
// }

//ex-03
// let salaries= {
//     Huzaifa: 5000,
//     Ahsan: 6000
// }

// for (let key in salaries) {
//     let update= '$' + salaries[key]
//     console.log(`The salaries of persons are ${key} => ${update}`)
// }
