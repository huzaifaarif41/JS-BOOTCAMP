//ex-01

// for (let i = 0; i <= 10; i++) {
//   console.log('Outer loop', i);

//   for (let j = 10; j >= 0; j -= 2) {
//       console.log('     Inner Loop', j)

//   }
// }

//ex-02

const gameBoard = [
  [23, 54, 23, 41],
  [32, 56, 22, 55],
  [45, 76, 78, 90],
  [45, 98, 89, 76],
];

for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];

  console.log(row);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j])
  }
  
}

//ex-03
const arr1= [23,43,54,45]
const arr2= [43,23,222,65]

for (let i=0; i<arr1.length; i++){
    for (j=0 ; j< arr2.length; j++){
        if(arr1[i]=== arr2[j]) {
            console.log(`A number in both the arrays is ${arr2[j]}`)
        }
    }
}