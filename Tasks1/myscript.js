//ex-01
// const noOfTickets=6
// const buyTickets=5
// const eachPrice= 10
// const discPrice= 2

// function ticket(theory, ...rest){ //first argu it should be theory means no of string values which we have..and second argu , it should be no of expressions 
//   return rest[2]
// }

// console.log(ticket `There are ${noOfTickets} and we have to buy ${buyTickets} and have each price of ${eachPrice} and discounted price is ${discPrice}`)


// function mobile() {
//   return {
//     model: 'Galaxy',
//     price: function () {
//       return 'Price is Rs 3000';
//     },
//   };
// }

// var samsung= mobile()
// console.log(samsung.model + ' ' + samsung.price())


function car(){
  return {
    name: 'Corolla',
    model: 2019,
    price: function() {
      return 'Price is Rs 50000'
    }
  }
}

var carDetails= car()

console.log(carDetails.price())
console.log(carDetails.name)