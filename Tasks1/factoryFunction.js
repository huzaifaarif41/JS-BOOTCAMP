//when a function returns an object, its called Factory Function..

//ex01
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

//ex-2

// function car(){
//     return {
//       name: 'Corolla',
//       model: 2019,
//       price: function() {
//         return 'Price is Rs 50000'
//       }
//     }
//   }
  
//   var carDetails= car()
  
//   console.log(carDetails.price())
//   console.log(carDetails.name)

//ex-03

function createPerson(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      getFullName() {
        return firstName + ' ' + lastName;
      },
    };
  }
  
  let person1 = createPerson('Huzaifa', 'Arif');
  let person2 = createPerson('Alii', 'Ahsan');
  
  console.log(person1.getFullName());
  console.log(person2.getFullName());