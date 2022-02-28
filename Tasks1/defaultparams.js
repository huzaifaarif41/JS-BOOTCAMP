// function multiply(a, b = 1) {
//     return a * b;
//   }
  
//   console.log(multiply(5, 2));
  
//   console.log(multiply(5));


function greet(name, greeting, message = greeting + ' ' + name) {
    return [name, greeting, message]
  }
  
  greet('Huzaifa', 'Hi')                    
  greet('Huzaifa', 'Hi', 'HAAAAA')