//it accpts a callback func 

//ex-01

const numbers= [21,23,4,5,6,22,222]

const nums= numbers.forEach((n,i)=>{

    console.log(n, i)
})

//ex-02
function printTriple(n){
        console.log(n*2)
}

const trippledNums=numbers.forEach(printTriple)
console.log(trippledNums)

//ex-03

const books= [{
    title: 'Hello',
    authors: ['Abc', 'Xyz'],
    rating: 4.5
}, {
    title: 'Hii',
    authors: ['abccccc', 'ytzz'],
    rating: 5.6
},{
    title: 'Greet',
    authors: ['aasd', 'asdasd'],
    rating: 1.2
},{
    title: 'Hello',
    authors: ['Abc', 'Xyz'],
    rating: 4.5
},{
    title: 'Helloooo',
    authors: ['Abchhh', 'Xyznnn'],
    rating: 3.55
},{
    title: 'Salam',
    authors: ['asdasdasd', 'asdasdasd'],
    rating: 8.5
},
]
const titless=books.forEach(function(b){
   console.log( b.title.toUpperCase())
})