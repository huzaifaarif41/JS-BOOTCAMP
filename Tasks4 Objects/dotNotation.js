//dotNotation
//Properties of a JavaScript object can be accessed using the dot notation in this manner: object.propertyName. Nested properties of an object can be accessed by chaining key names in the correct order.

const apple = { 
    color: 'Green',
    price: {
      bulk: '$3/kg',
      smallQty: '$4/kg'
    }
  };
  console.log(apple.color); // 'Green'
  console.log(apple.price.bulk); // '$3/kg'
  console.log(apple.price.smallQty ) //'$4/kg'


       //Bracket Notation
const apple = { 
    color: 'Green',
     price: {
          bulk: '$3/kg',
          smallQty: '$4/kg'
        }
      };       

const appleColor= apple['color']

console.log(appleColor)


//ex-03
// const nums= {
//   43 : 'forty three',
//   56: 'fifty six'
// }

// nums.43 // syntax error, unexpected number

const nums= {
  43 : 'forty three',
  56: 'fifty six'
}

nums[43] //forty three

//ex-04

const nums1= {
  100 : 'one hundred',
  45 : 'forty five',
  '46 number' : 'forty six'

}

//nums1."46 number" //syntax error
nums1["46 number"] //forty six

//it converts in a string but dot notation doesnt get this property but in square brackets, it works just fine..

//when you use some variable or dynamic value as your key, you have to use square brackets

const colors= {
  red: 'red',
  yellow: 'yellow',
  blue: 'blue'
}

let yellowColor= 'yellow'
console.log(colors[yellowColor]) //yellow

console.log(colors.yellowColor) //undefined 


    