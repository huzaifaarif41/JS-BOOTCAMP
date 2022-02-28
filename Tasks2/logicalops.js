                                  //*String Concatenation
//In JavaScript, multiple strings can be concatenated together using the +  operator.  

// let service= 'JS'
// let bill= 123

// let displayText= 'Our service is' + service + 'and bill of our prject is ' + bill

// console.log(displayText)
 
                                   //*String Interpolation
//String interpolation is the process of evaluating string literals containing one or more placeholders(expressions, variables,etc).It can be performed using template literals:text ${expression} text

// let name= 'Huzaifa'
// let fName= 'Arif'

// console.log(`My name is ${name} and father name is ${fName}`)

                                   //*Template Literals
//Template literals are strings that allow embedded expressions, ${expression} . While regular strings use  single '  or double "  quotes,                                    

// let name = "Huzaifaa";
//  console.log(`Hello, ${name}`); 
//  // Prints: Hello, Huzaifaa

// *OR operator //01
//The logical OR operator ||  checks two values and returns a boolean. If one or both values are truthy, it returns true . If both values are falsy, it returns false 
// true || false;        // true
//  10 > 5 || 10 > 20;    // true
//  false || false;       // false
//  10 > 100 || 10 > 20;  // false

 //02
// const num1 = 3;
// const num2 = -2;

// console.log(num1 > 0 || num2 > 0);
// expected output: true

 // *AnD Operator

//The logical AND operator &&  checks two values and returns a boolean. If both values are truthy, then itreturns true . If one, or both, of the values is falsy,then it returns false 
// true && true;      // true
// 1 > 2 && 2 > 1;    // false
// true && false;     // false
// 4 === 4 && 3 > 1;  // true

// const a = true, b = false;
// const c = 4;

// console.log(a && a); // true
// console.log(a && b);  // false

// console.log((c > 2) && (c < 2)); // false

// *!(Not operator)
//The logical NOT operator !  can be used to Invert a Boolean value and Invert the truthiness of non-Boolean values

// let lateToWork = true;
// let oppositeValue = !lateToWork;
 
// console.log(oppositeValue);


// *DoubleBang Operator (!!)

// !!true // returns true
// !!false // returns false

// isTrue = true // variable which is boolean
// !!isTrue // returns true

//ex-01

// var something = 'string';
//  if (!!something) {
//    console.log('This is truthy')
//  } else {
//    console.log('This is falsey') 
//  }


 //Nullish coalescing operator (??)
//ex01
//  const foo = null ?? 'default string';
// console.log(foo);
// // expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// expected output: 0

//ex02

// const nullValue = null;
// const emptyText = ""; // falsy
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA); // "default for A"
// console.log(valB); // "" (as the empty string is not null or undefined)
// console.log(valC); // 42

// Equal Operator (==)

// var a= 10
// var b='10'

// console.log (a==b)  //returns true because values are same.. 

// *strict equal (===)

// const a = 2;

// // strict equal operator
// console.log(a === 2); // true
// console.log(a === '2'); // false

//returns false because values are same but data types are not so it returns false..


// * not Equal (!=)
//true if the operands are not equal

// 5!=5; //returns false

//ex-01
// const num1=6, stringg1= 'Huz'

// console.log(num1 != 5)

// console.log(stringg1!= 'huz')

// //ex-02
// const a = 3, b = 'hello';

// console.log(a != 2); // true
// console.log(b != 'Hello'); // true


// *(!==)  strict not equal
//!== evaluates to true if the operands are strictly not equal. It's the complete opposite of strictly equal ===

// const a = 2, b = 'hello';

// console.log(a !== 2); // false because its equal 2=2
// console.log(a !== '2'); // true because its data type is not equal
// console.log(b !== 'Hello'); // true because its not equal.

// * Greater Than(>) operator
//ex-01
// const a = 3;

// console.log(a > 2); // true

//ex-02
// const num2= 50

// console.log(30>num2) //false

//* Greater Than or equal to(>=) operator

//ex-01

// const num2= 20

// console.log(30 >=20) //true

//ex-02

// const num1 = 30
// console.log(num1>=50) //false

// * Less Than (<) operator

// const a = 3, b = 2;

// console.log(a < 2); // false
// console.log(b < 3); // true

// * Less than or EqualTo(<=) operator
// const a = 2;

// // less than or equal operator
// console.log(a <= 3) // true
// console.log(a <= 2); // true


                               // *Arithmatic Operators

// *Addition
//ex-01
// let sum = 10 + 20;
// console.log(sum);  //30

//ex-02

// let netPrice= 9.99;
// let shippingFee = 2.49

// let result= netPrice +shippingFee

// console.log(result) //12.48

//ex-03

// let x = '10',
// let y = '20';
// let result = x + y;

// console.log(result) //1020 because if two values are strings, it concatenates both values

//ex-04
// let result = 10 + '20';

// console.log(result); //it also returns 1020 because if one value is string, it automatically converts a numeric value into a string and than concatenates.


// *Subtraction Operator(-)

//ex-01

// let result = 30 - 10;
// console.log(result);

// *Multiplication Operaor

//ex-01
// let result = 2 * 3;
// console.log(result); //6

//ex-02

// let result = '5' * 2;

// console.log(result) // 10    //if a number is string and multiplies a second number,, it automatically converts string into a number by Number() method and then multiply.

// *Divide Operator

// let result = 20 / 10;

// console.log(result); //2

//ex-02 //
// let result = '20' / 2;
// console.log(result); //if a number is string, JS converts that number into a number and then Divides

//ex-03

// let energy = {
//     toString() {
//       return 50;
//     },
//   };
  
//   let currentEnergy = energy - 10;
//   console.log(currentEnergy);
  
//   currentEnergy = energy + 100;
//   console.log(currentEnergy);
  
//   currentEnergy = energy / 2;
//   console.log(currentEnergy);
  
//   currentEnergy = energy * 1.5;
//   console.log(currentEnergy);

// *Modulo Operator
// It returns a remainder left over when 2 numbers are divide

// 9 % 5 // 4
// -12 % 5 // -2
// 1 % -2 // 1
// 5.5 % 2 // 1.5
// -4 % 2 // -0


// *PostFix Increment (a++)

// var a = 2;
// b = a++; // b = 2, a = 3


// // *PreFix Increment  (++a)

// var a = 2;
// b = ++a; // b =3 , a = 3

// *PreFix Decrement (--a)
// var x = 2;
// y = --x; // x = 1, y = 1

// // PostFix Decrement (a--)
// var x = 2; 
// var x = 3;
// y = x--; //y = 3, x = 2



                                //*Assignment Operators
// *Addition Assignment (a+=b) = a=a+b

// let a = 2;
//  const b= 3;
  
//  console.log(a); //2

//  console.log(a +=b); //5


// // *Subtraction Assignment (a-=b) = a=a-b
// let a = 2;
//  const b= 3;
  
//  console.log(a);

//  console.log(a -=b); //2-3= -1

// // Multiplication Assignment (a*=b) = a=a*b
// let a = 2;
//  const b= 3;
  
//  console.log(a);

//  console.log(a *=b); //6

// //Division Assignmment (a/=b= a=a/b)
// let a = 10;
//  const b= 2;
  
//  console.log(a);

//  console.log(a /=b); //5



                                            //*Short Circuiting
//In Short-circuiting, an expression is evaluated from left to right until it is confirmed that the result of the remaining conditions is not going to affect the already evaluated result. If the result is clear even before the complete evaluation of the expression, it short circuits and the result will be returned.                                             

//ex-01  (AND OPERATOR)
//Since first operand is false and operator is AND, Evaluation stops and false is returned.
// console.log(false && true && true && false)
  
// Whole expression will be evaluated. And returns True
// console.log(true && true && true)


//ex-02  (OR OPERATOR)
//First operand is true and operator is || evaluation stops and true is returned.
// console.log(true || false || false)
  
// Evaluation stops at the second operand(true) and returns true
// console.log(false || true || true || false)



                                 //*CONTROL FLOW
//Control flow in JavaScript is how your computer runs code from top to bottom. It starts from the first line and ends at the last line, unless it hits any statement that changes the control flow of the program such as loops, conditionals, or functions.                                 

                                 //TERNIARY OPERATORS
//A ternary operator evaluates a condition and executes a block of code based on the condition.
//ex-01
// let marks= prompt('Enter your marks')
 
// let result =(marks>=60 ? 'Pass' : 'Fail')

// console.log(`You ${result} the exam`)
                   
//ex-02 /nested Terniary operator

// let a=10;

// let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
// console.log(result)

function doCalc () {
    2 + 1;
    3+1    
}

false ? doCalc()
     : 5 + 1


                 

                                    








