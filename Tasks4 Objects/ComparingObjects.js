//objects are a reference type. Two distinct objects are never equal, even if they have the same properties. 
//Only comparing the same object reference with itself yields true.

//ex-01
const fruit = {name: 'apple'};
const fruitbear = {name: 'apple'};

fruit == fruitbear; // return false
fruit === fruitbear; // return false

//ex-02
const fruit = {name: 'apple'};
const fruitbear = fruit; //here we reference fruit to fruitbear

fruit == fruitbear; // return true
fruit === fruitbear; // return true

fruit.name = 'grape';
console.log(fruitbear); // output: { name: "grape" }