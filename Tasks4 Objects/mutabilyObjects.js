//Objects are mutable means their values can be changed even when they are declared as const. New Properties can be added and existing properties can be added or deleted.

const student= {
    name: 'Huzaifa',
    grade: 'A+',
    percent: 85
}
console.log(student) //{name: 'Huzaifa', grade: 'A+', percent: 85}

delete student.grade //{name: 'Huzaifa', percent: 85}

console.log(student)
student.percent= 90

console.log(student) //{name: 'Huzaifa', percent: 90}