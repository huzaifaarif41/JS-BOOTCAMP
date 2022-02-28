//if we want to print same code multiple of times than we are using For loop.
//for Example
// console.log('First number is 1')
// console.log('First number is 2')
// console.log('First number is 3') , thats same kind of code so dnt repeat that code and for alternate,we are using For Loop
//ex-01

for (let numm = 1; numm <= 10; numm++) {
  console.log(`The Number from 1 to 10 are ${numm}`);
}

//ex-02
for (let numm = 1; numm <= 10; numm += 2) {
  console.log(`The Number from 1 to 10 are ${numm}`);
}

//ex=03

// for(num1=1; num1<=20; num1++){
//     console.log(`The Number from 1 to 10 are ${num1*num1}`)
// }
//An array’s length can be evaluated with the .length property. This is extremely helpful for looping througharrays, as the .length  of the array can be used as the stopping condition in the loop.
//ex-04
// let examScores= [50, 60, 20, 40,70,54]
// for(i=0; i<examScores.length; i++){
//     console.log(i, examScores[i])
// }

//ex-05

// let student =[
//     {
//         name: 'Huzaifa',
//         grade: 90
//     },
//     {
//         name: 'Ahsan',
//         grade: 90
//     },
//     {
//         name: 'Ali',
//         grade: 80
//     },
//     {
//         name: 'Taha',
//         grade: 50
//     },

// ]

// for(let i=0; i<student.length; i++){
//     let studentData= student[i]
//     console.log(`The student named ${studentData.name} scored ${studentData.grade} `)
// }

//ex-06
// const word= 'stressed'
// let reversedWord= ''

// for(let i=word.length-1; i>=0; i--)
// {
//     reversedWord +=word[i]
//    console.log(reversedWord)
// }

// // console.log(reversedWord)

                 //*Break Keyword
//Within a loop, the break  keyword may be used to exitthe loop immediately, continuing execution after theloop body.
//ex-01
// for(i=0; i <10 ; i++){
//     console.log(i)
//     if(i===5){
//         break;
//     }
// }
//When break is used inside of two nested loops, break terminates the inner loop.
// for( i=0; i<=3; i++){
//     for(j=0; j<=5; j++){
//         if(i==2){
//             break
//         }
//         // console.log(`i= ${i} and j= ${j}`)
//     }
// }

                    //*Continue Keyword
//The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.

// for (i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;

//   }
//   console.log(i);
// }
