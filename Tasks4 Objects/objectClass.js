// //*Object.entries
// //convert an object into array of key-value pairs.
// //loop over objects easily
// //Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property [key, value] pairs found directly upon object.

// //ex-01
// // const person= {
// //     name: 'Huzaifa',
// //     age: 24
// // }

// // console.log(Object.entries(person))
// //0: (2) ['name', 'Huzaifa']
// //1: (2) ['age', 24]

// //ex-02
// const person = {
//   name: 'Huzaifa',
//   age: 24,
// };
// for (const [key, value] of Object.entries(person)) {
//   console.log(`Key name is ${key} and Value is => ${value}`);
// }
// //ex-03
// const object1 = {
//   a: 'somestring',
//   b: 42,
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// // expected output:
// // "a: somestring"
// // "b: 42"

// //*Object.Keys()
// //Object.Keys only prints objects own properties..
// //The Object.keys() method returns an array of a given object's own enumerable property names,
// //iterated in the same order that a normal loop would.

// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// };

// console.log(Object.keys(object1));

// //ex-02
// const obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.keys(obj)); // console: ['0', '1', '2']

// //ex-03
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// //*Object.values()
// //The Object.values() method returns an array of a given object's own enumerable property values,
// //in the same order as that provided by a for...in loop.
// //difference is that a for...in loop enumerates properties in the prototype chain as well.

// //ex-01
// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// };

// console.log(Object.values(object1));
// // expected output: Array ["somestring", 42, false]

// //ex-02
// // When using numeric keys, the values are returned in the keys' numerical order
// const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']


//                            //*Object.freeze()
// //The Object.freeze() method freezes an object. A frozen object can no longer be changed; 
// //freezing an object prevents new properties from being added to it, 
// //existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties,

// //ex-01

// const obj1 ={
//     name : 'Huzaifa',
//     age: 20
// } 
// Object.freeze(obj1)

// console.log(obj1)

// obj1.age= 24
// console.log(obj1)

                             //* Object.assign()
//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
// It returns the modified target object.  

const target= {
    a: 'Huzaifa',
    b: 23
}
const source= {
    c: 'Arif',
    d: 43
}

const targetObj= Object.assign(target, source)
console.log(target) //{a: 'Huzaifa', b: 23, c: 'Arif', d: 43}

console.log(source) // {c: 'Arif',d: 43 }

console.log(targetObj) //{a: 'Huzaifa', b: 23, c: 'Arif', d: 43}

//ex-02
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

                             //*Object.getOwnPropertyNames(o)
//The Object.getOwnPropertyNames() method returns an array of all properties 
//(including non-enumerable properties except for those which use Symbol) found directly in a given object.      

const object1 = {
    a: 'huz',
    b: 'ahsan',
    c: 2
}

const res= Object.getOwnPropertyNames(object1)
console.log(res) //['a', 'b', 'c']



