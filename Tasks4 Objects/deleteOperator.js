//When Object is created, it is possible to delete properties of an object using delete keyword. 
//The delete keyword deletes both the value of the property and the property itself from the object. 
//It only applicable on properties, not variables or functions


//ex-01

const namee= {
    firstName: 'Huzaifa',
    lastName: 'Arif',
    address: 'Fb-area',
    age: 23
}

delete namee.lastName //it returns true

console.log(namee) //{firstName: 'Huzaifa', address: 'Fb-area', age: 23}

delete namee.age
console.log(namee)   //{firstName: 'Huzaifa', address: 'Fb-area'}

//ex-02
const student= {
    name: 'Huzaifa',
    grade: 'A+',
    percent: 85
}
console.log(student) //{name: 'Huzaifa', grade: 'A+', percent: 85}

delete student.grade 

console.log(student) //{name: 'Huzaifa', percent: 85}

