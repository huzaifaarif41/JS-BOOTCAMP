// number type in javascript include both integer and floating point number

var a = 5e3;
var b = 34e-5;
console.log(a, b);

// javascript also provide an object representation of number

let c = new Number(34);
console.log(c);

Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN

console.log(Number.isNaN(44)); // Determine whether the passed value is NaN.

Number.isFinite();
// Determine whether the passed value is a finite number.

Number.isInteger();
// Determine whether the passed value is an integer.

// String
// The String object is used to represent and manipulate a sequence of characters.
const str = new String("A String object");
console.log(str);

let s_prim = "foo";
let s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj); // Logs "object"

let longString =
  "This is a very long string which needs \to wrap across multiple lines because \otherwise my code is unreadable.";
console.log(longString);

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log(length);

let str1 = "Apple, Banana,Grapes, Strawberry,  Kiwi";
let part = str1.slice(4, 23);
console.log(part);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "Amazon");   //it replaces microsoft t Amazon
console.log(newText);

// Boolean
// You can use the Boolean() function to find out if an expression (or a variable) is true:
console.log(Boolean(10 > 9));
let x = false; //primitive

let y = new Boolean(false); //object
console.log(x, y);

// Array

// The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
// array creation
let fruits = ["Apple", "Banana"];

console.log(fruits.length);
// 2

fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf("Banana");
// 1

// Object

// Creates a new Object object. It is a wrapper for the given value.
let o = new Object();
// equivalent to o = new Boolean(true)
let o2 = new Object(true);

// Class
// Hoisting

// const p = new Rectangle(); // ReferenceError

class Rectangle0 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// console.log(p);

// A class expression is another way to define a class. Class expressions can be named or unnamed
// unnamed
let Rectangle00 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle00.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"

// generator
class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]

// The super keyword is used to call corresponding methods of super class.
//  This is one advantage over prototype-based inheritance.

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

let l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

// TYPES
// primitive data types are basic data structure

// Number
// String
// Boolean
// null
// undefined

// Non-primitive data types is the object. The JavaScript arrays and functions are also objects.

// object
// function
// array

// null, undefined , NaN

// Undefined: if any variable which is not assigned any value.Its data type is undefined
// Null its some thing like an undefined its type is object

// let a = null;
// let b;

// console.log(a);
// console.log(typeof a); //object
;
// console.log(typeof b); //undefined

// console.log(a == b); //true
// console.log(a === b); //false

// let c = NaN;

// console.log(c); //NaN
// console.log(typeof c); //Number

// // or

// let d = 4;
// console.log(4 * "ahs");
// console.log(typeof d);

// The string interpolation in JavaScript is performed by template
// literals (strings wrapped in backticks `) and
// ${expression} as a placeholder. For example:

// const number = 42;
// const message = `The number is ${number}`;
// console.log(message); // => 'The number is 42'



