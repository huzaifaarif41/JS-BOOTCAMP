let developr1= {name: 'Huzaifa'}

let developr2= developr1

console.log(developr1)
console.log(developr2)

developr2.name= 'Ahsan'

console.log(developr1) //{name: 'Ahsan'} //It is a shallow Copy

//To Overcome this, we can use Object.assign or spread operators
let developr1= {name: 'Huzaifa'}

// let developr2= developr1

let developr2= {...developr1}

// // console.log(developr1)
// // Object.assign({}, developr1)
// console.log(developr2)

// developr2.name= 'Ahsan'

// console.log(developr2) //{name: 'Ahsan'}

//*Deep Copy
let developr1 = {
  name: 'Huzaifa',
  skills: { primary: 'full stack', secondary: 'front End' },
};

// let developr2= developr1
//  let developr2 = { ...developr1 }; //this is not a solution //It can do partially deep copy

let developer2= JSON.parse(JSON.stringify(developr1))   //We can do stringifying developr1 into json string and then again parsing that json string and create another object

developr2.name = 'Ahsan';
developr2.skills.secondary= 'backend'

// console.log(developr1); //secondary property changed to BackEnd

console.log(developr1)  //{name: "Huzaifa" skills: {primary: 'full stack', secondary: 'front End' }
console.log(developr2);  //name: "Ahsan" skills: {primary: 'full stack', secondary: 'backend'


