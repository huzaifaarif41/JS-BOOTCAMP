
                              //*var let const
//var declarations are globally scoped or function scoped while let and const are block scoped.
//var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
//While var and let can be declared without being initialized, const must be initialized during declaration.

//*var
//block scope (n)
//redeclareable (y)
//reassignable (y)
//hoist (y)

// var hello = "hey hi";

// // function newFunction() {
// //   var hello = "hello";
// // }
// // console.log(hello); // 'hey hi'


//*let
//block scope (y)
// //redeclareable (n)
// //reassignable (y)
// //hoist (n)
// let count; 
//  console.log(count); // Prints: undefined
//  count = 10;
//  console.log(count)

//*Const
//block scope (y)
// //redeclareable (n)
// //reassignable (n)
// //hoist (n)

// const numberOfColumns = 4;
//  numberOfColumns = 8;
 // TypeError: Assignment to constant variable.

                           //*var names legal and illegal
        

// Variable names cannot contain spaces.

// Variable names must begin with a letter, an underscore (_) or a dollar sign ($).

// Variable names can only contain letters, numbers, underscores, or dollar signs.

// Variable names are case-sensitive.

// Certain words may not be used as variable names, because they have other meanings
//  within JavaScript. Check out this complete list of the reserved words.

// let $num = 3;
// console.log($num);

// let class=3
// console.log(class)  //error



// Reference Error
// The Reference Error object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

// let z;
// console.log(y); // y is not defined : throw reference error

// console.log(b); //variables.js:131 Uncaught ReferenceError: Cannot access 'b' before initialization
// let b;

// Boxing vs Unboxing
//  Boxing
// In JavaScript and other languages, primitives values don’t have methods or properties, so if you want to use them, you need to use a wrapper. String primitive name
// const name1 = "KESK";
// const name2 = name1.toLowerCase(); //kesk
// console.log(typeof name2);
// In general, using the boxed object wrapper directly isn’t usually a good idea because there are some
//  gotchas related to him, and you have to be careful if you don’t want unexpected results.

// const a = new Boolean(true);
// if (a) console.log("it's true"); // it's true
// const b = new Boolean(false);
// if (!b) console.log("never runs"); // objects are “truthy.“
// const c = Object(false);
// if (!c) console.log("never runs"); // objects are “truthy.“

// Unboxing
// const a = Object(false);
// console.log(typeof a);
// a == false; //true
// a === false //false
// a.valueOf() == false //true
// a.valueOf() === false //true

// Mutation:
// Mutable or imutable : primitive data type is imutable  or non primitive type is mutable

// Call by Value vs Call by reference

// by value.
// let a = 1;
// let b = a;
// b = b + 2;
// console.log(a); // 1
// console.log(b); // 3

// by reference
// let x = [1];
// let y = x;
// y.push(2);
// console.log(x); // [1, 2]
// console.log(y); // [1, 2]