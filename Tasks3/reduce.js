//reduce is an array method, we pass in a callback and callback needs to follow a particular format. It has 2 params accumulator and current value.. accumulator is also called total value which is stored value.
//it is basically a method in which we taking bunch of values and return a single value..

//ex=01

// const nums= [6,3,2,4]

// const result= nums.reduce((total, currentVal)=>{
//     return total + currentVal
// })
// console.log(result)

//this is how it runs
//total          current val    return
//  6              3              9
// 9               2              11
//11                4              15
//15


//ex-02

// const grades= [34, 54,23,78,99,54]

// const gradeMax= grades.reduce((max, currVal)=>{
//     if(currVal> max){
//         return currVal
//     }
//     else{
//         return max
//     }
// })
// console.log(gradeMax)
// max           currVal         return 
//  34             54             54
//54               23              54
//54               78               78

//ex-03
// const gradeMax= grades.reduce((max, currVal) =>{
//     return Math.max(max, currVal)
// })
// console.log(gradeMax)

// const gradeMin= grades.reduce((max, currVal) =>{
//     return Math.min(max, currVal)
// })
// console.log(gradeMin)

//ex-04

const nums= [6,3,2,4]

const result= nums.reduce((total, currentVal)=>{
    return total + currentVal
},1000)  //it is starting value like starting value is 1000 and then adds 6 which gets 1006, and then add 3 which gets 109..etc..

console.log(result)


//ex-05

const votes= ['y','y', 'n','y', 'n', 'n', 'y', 'y', 'y']

const results= votes.reduce((tally, currVal)=>{
    if(tally[currVal]){
        tally[currVal] ++;
    }
    else {
        tally[val] =1
    }
    return tally
}, {})
// {}
//{y:1}
//{y:2}
//{y:2, n:1}

//ex-06

const books= [{
    title: 'Hello',
    authors: ['Abc', 'Xyz'],
    rating: 4.5,
    genres:['fiction', 'fantasy']
}, {
    title: 'Hii',
    authors: ['abccccc', 'ytzz'],
    rating: 5.6,
    genres:['aaaaaa', 'faaa']
},{
    title: 'Greet',
    authors: ['aasd', 'asdasd'],
    rating: 1.2,
    genres:['isdiasid', 'aaaawwwwww']
},{
    title: 'Hello',
    authors: ['Abc', 'Xyz'],
    rating: 4.5,
    genres:['fdasdasdsad', 'fiction']
},{
    title: 'Helloooo',
    authors: ['Abchhh', 'Xyznnn'],
    rating: 3.55,
    genres:['fictionasdasdadwd', 'fantasy']
},{
    title: 'Salam',
    authors: ['asdasdasd', 'asdasdasd'],
    rating: 8.5,
    genres:['ficasdasdasd', 'fantasy']
},
{
    title: 'horrible Book',
    authors: ['Xavier Time'],
    rating: 8.5,
    genres:['ficasdasdasd', 'fantasy']
},
]
