//'this' is a reference to an object and that object represents the current execution scope..
//The reserved keyword this refers to a method’s calling object,
//it can be used to access properties belonging to that object.
//this refers to Window Object

// const person= {
//     first: 'Huzaifa',
//     last: 'Arif',
//     fullName(){
//         console.log(this) //{first: 'Huzaifa', last: 'Arif', fullName: ƒ} this is reference to an object
//     }
// }

// const person= {
//      first: 'Huzaifa',
//      last: 'Arif',
//      fullName(){
//         console.log(this.first) //Huzaifa
//      }
//     }

//ex-03
// const person= {
//     first: 'Huzaifa',
//     last: 'Arif',
//     nickname: 'Huzz',
//     fullName(){
//        console.log(`${this.first} ${this.last} ${this.nickname}`) //Huzaifa Arif Huzz
//     }
//    }

//ex-04
// const person = {
//   first: 'Huzaifa',
//   last: 'Arif',
//   nickname: 'Huzz',
//   fullName() {
//     const { first, last, nickname } = this;
//     console.log(`${first} ${last} ${nickname}`)
//   },
// };

//ex-05
// const person = {
//   first: 'Huzaifa',
//   last: 'Arif',
//   nickname: 'Huzz',
//   fullName() {
//     const { first, last, nickname } = this;
//     return `${first} ${last} ${nickname}`;
//   },
//   personBio() {
//     const fullName = this.fullName(); //this reference to an entire object and go to fullname method and then executes
//     console.log(`${fullName} is a person`);
//   },
// }; //Huzaifa Arif Huzz is a person

const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name;
  },
};

console.log(cat.whatName());
// Output: Pipey

                                                //*This Javascript function
const restaurant = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    // this refers to the restaurant object
    // and it's used to access its properties
    return this.seatCapacity - this.numCustomers;
  },
};
restaurant.availableSeats() //55

                                                //*JavaScript Arrow Function this Scope
//it is referenced to global scope to the Window unlike regular functions which referenced to object, that person object which we define earlier

//ex-01
const person = {
    first: 'Huzaifa',
    last: 'Arif',
    nickname: 'Huzz',
    fullName() {
      const { first, last, nickname } = this;
      return `${first} ${last} ${nickname}`;
    },
    personBio() {
      const fullName = this.fullName(); 
      console.log(`${fullName} is a person`);
    },
    laugh:()=> {
        console.log(this)
        console.log(`${this.nickname} says hahah`)
     }
  };
 //ex-02
 const myObj = {
    data: 'abc',
    loggerA: () => { console.log(this.data); },
    loggerB() { console.log(this.data); },
};
 
myObj.loggerA();    // undefined
myObj.loggerB();    // 'abc'