//filter allows us to filter out subsets of an array.It doesnt update the original, it doesnt mutate.. Simply, we are removing some targeted elements and make a copy of an array of those targeted elemetns or information..
//ex-01
// const nums= [76, 78,23,63,56,43]

// const odds= nums.filter((n)=> n%2===1)
// console.log(odds)

// const evens= nums.filter((n)=> n%2===0)
// console.log(evens)


//ex-02
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
]

const goodBooks= books.filter(book => book.rating>5)
console.log(goodBooks)

//ex-03

const booksFantasy= books.filter(book=>(
     book.genres.includes('fantasy')
) )

//ex-04

const booksInformation= books.filter(book=>(
    book.genres.includes('fantasy') || book.genres.includes('fiction')
) )
console.log(booksInformation)


//ex-04
const query= 'he'

const results= books.filter(book=>{
    const titleName= book.title.toLowerCase()

    return titleName.includes(query.toLowerCase())
})
console.log(results)

//ex-05
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}

let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);

