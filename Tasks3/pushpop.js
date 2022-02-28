                        //push 
//ex-01

const animals = ['cows', 'goats', 'sheep'];

const count = animals.push('lion');
console.log(count); //4
console.log(animals);

animals.push('chickens', 'cats', 'dogs');
console.log(animals);

//ex-02
let city = ["New York", "Madrid", "Kathmandu"];


city.push("London");

console.log(city);

 //ex-03
 var languages = ["JavaScript", "Python", "Java", "Lua"];

var count = languages.push("C++");
console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'Lua', 'C++' ]
console.log(count); // 5

var priceList = [12, 21, 35];
var count1 = priceList.push(44, 10, 1.6);
console.log(priceList); // [ 12, 21, 35, 44, 10, 1.6 ]
console.log(count1); // 6

            //pop

//ex-01

let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
let removedCity = cities.pop();

console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
console.log(removedCity);   // Paris

//ex-02

var numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [-5, -4, -3],
  ];
console.log(numbers.pop()); // [ -5, -4, -3 ]
console.log(numbers); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]