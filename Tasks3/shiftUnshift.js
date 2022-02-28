     //unshift     ex-01
var languages = ["JavaScript", "Python", "Java", "Lua"];

var count = languages.unshift("C++");
console.log(languages); // [ 'C++', 'JavaScript', 'Python', 'Java', 'Lua' ]
console.log(count); // 5

     //ex-02
var priceList = [12, 21, 35];

var count1 = priceList.unshift(44, 10, 1.6);
console.log(priceList); // [ 44, 10, 1.6, 12, 21, 35 ]
console.log(count1); // 6


//shift //ex-01

var languages = ["JavaScript", "Python", "Java", "Lua"];

var count = languages.shift();
console.log(languages); // [ 'C++', 'JavaScript', 'Python', 'Java', 'Lua' ]
console.log(count);