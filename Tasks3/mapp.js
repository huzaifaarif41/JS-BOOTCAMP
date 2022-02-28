//map is crerating a new array from existing array
//it can be used to extract portions of an array or to transform an array into new array
//ex-01

const numbers =[23,31,34,21,45,63]

const words= ['huzaifa', 'ali', 'asap','asdaa']

const doubles= numbers.map((num)=>{
    return num*2

})
console.log(doubles)

//ex-02
const numDetail =numbers.map((n)=>{
    return{
     value: n,
     isEven: n%2===0
    }
})
console.log(numDetail)

//ex-03

const wordDetail= words.map((word)=>{
    return word.toUpperCase().split('').join('.')
})

//ex-04
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
    title: 'Hello',
    authors: ['Abc', 'Xyz'],
    rating: 3.55
},{
    title: 'Salam',
    authors: ['asdasdasd', 'asdasdasd'],
    rating: 8.5
},
]

const titles= books.map((name)=>{
    return name.title

})
console.log(titles)