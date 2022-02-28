//Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
//it creates a new array from an existing array. Spreads the elements from one array to new array.
//it uses to copies an array into a new destination..
//if we spread an array into new array, they have unique refernce type so they both are not equal even they have elemnts are same.

const nums= [12,14,16,18,20]

Math.max(nums) //Nan because it takes a single argument, it has a number of arguments. It expects each argument to be a number. This argumnet we passed is not a number. It is a list of numbers but its not a number So we use Spread

Math.max(...nums)

//ex-02

function giveFourNums(a,b,c,d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors= ['red', 'orange', 'blue', 'pink']

giveFourNums(...colors)

//ex-02

const str1=['abcc', 'bcc', 'cdd']
const str2=['abcc', 'bcc', 'cdd']
const str3=['abcc', 'bcc', 'cdd']

const str4= [...str1, ...str2]

console.log(str4) //['abcc', 'bcc', 'cdd', 'abcc', 'bcc', 'cdd']

//ex-03

const str5= [...str3]

console.log(str5) // ['abcc', 'bcc', 'cdd']

//str5===str3 (false)

//ex-04
let arr = ['a','b'];
let arr2 = [...arr,'c','d'];
  
console.log(arr2);
