//currying funcs
//when a func, Instead of taking all arguments at one time, takes the first one and returns a new func and then takes second one and return new function
//example 1

function sum (x) {
  return(y) => {
    return (z) => {
      return x + y + z;
    };
  };
}
let data= sum(10)
let data2= data(20)
console.log(data2(40))

let data= sum(20)(40)(60)
console.log(data)

//example2
function multiply(number){
    return (number2)=>{
        return number* number2
    }
}

const result= multiply(6)

console.log(result(7))

//example3
let userObj= {
    name:'Huzaifa',
    lastName: 'Arif',
    id: 123
}

function info(obj) {
    return(name) =>{
        return obj[name]
    }
}
let data= info(userObj)
console.log(data('lastName'))
console.log(data('id'))
