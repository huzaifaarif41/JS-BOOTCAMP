//ex01
const noOfTickets=6
const buyTickets=5
const eachPrice= 10
const discPrice= 2

function ticket(theory, ...rest){ //first param it should be theory means no of string values which we have..
  return theory
}

console.log(ticket `There are ${noOfTickets} and we have to buy ${buyTickets} and have each price of ${eachPrice} and discounted price is ${discPrice}`)

//ex-02
let greetings = "Hi";
let name = "Huzaifaa";
let age = 20;

function transform(static, ...rest) {
  console.log(static); // ["", " my name is ", " and I am ", ""]
  console.log(rest); //["Hi", "Huzaifaa", 20]
}

transform`${greetings} my name is ${name} and I am ${age}`;
