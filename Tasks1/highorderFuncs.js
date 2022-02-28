//funcs that take other funcs as an arguments or return functions as their results..
//funcs thats result are also functions

// ex01
const interview = (name) => {
  if (name === 'Huzaifa') {
    return function (topic) {
      console.log(`Hii ${name} . Please explain ${topic} ?`);
    };
  }

  if (name === 'Ahsan') {
    return function (topic) {
      console.log(`Hii ${name}.. Please Explain ${topic}?`);
    };
  } else {
    return function () {
      console.log('Wrong');
    };
  }
};

// interview('Huzaifa')('UI')  //first type of calling high order funcs by using double paranthesis
// interview('Ahsan')('FrntEnd Developer');

//second type of calling

const candidate1 = interview('Huzaifa');
candidate1('Javasciprt');
candidate1('UI')

const candidate2= interview('Ahsan')
candidate2('REACT')

// ex-02

const add=(a,b) =>{
    return a+b
}
console.log(add(7,8))

const subs= (a,b) =>{
    return a-b
}
console.log(subs(10,9))


const calc= (num1, num2, operator) =>{
    return operator(num1,num2)
}

calc(87,82,add)
