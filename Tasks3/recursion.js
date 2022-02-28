//recursion is a technique in which solution of big problem is dependent on the solutions of each sub problems inside of it.
 //it usualyy calls as a function that calls itself over and over and over until it stopping condition
 
 function factorial(x) {

    
    if (x <= 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

//When you call function factorial() with a positive integer, it will recursively call itself by decreasing the number.
//This process continues until the number becomes 1. Then when the number reaches 0, 1 is returned.
//steps
// factorial(3) returns 3 * factorial(2)
// factorial(2) returns 3 * 2 * factorial(1)
// factorial(1) returns 3 * 2 * 1 * factorial(0)
// factorial(0) returns 3 * 2 * 1 * 1