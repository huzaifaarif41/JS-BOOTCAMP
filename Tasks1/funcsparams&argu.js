//Function Parameters and Arguments
//1st example

function mySum(a, b) {
  const add = a + b;
  console.log(add);
}

mySum(6, 7);

//ex-2
function abc(string1, string2 = 0) { //parameters
  console.log(string1);
  console.log(string2);
}
abc('HELLLOO', 'WORLD');
abc('my first argu'); //argumentabc('My first argu') //second argument here is 0 which is initialiazed in param, if we gave argument for string2, so it overlap that 0 and return that value
