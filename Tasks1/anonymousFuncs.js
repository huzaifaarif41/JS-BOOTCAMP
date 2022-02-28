//Anonymous Functions
//which have no specified name. It can be stored in a variable and can also be returned in a function. It can also be pass in a function

//ex01
let a= function(a, b){
  console.log(a + b)
}

a(70, 86)

//ex02

function namee (funcc) {
  return funcc() //paranthesis because we expect a function there as a anonymous function thats why we use paranthesis
}

document.write(namee(function(){
  return "Huzaifaaaa"
}))

//ex03

function add(num1) {
  return function(num2){
    return num1*num2

  }
}

let resultt= add(34)
console.log(resultt(2))