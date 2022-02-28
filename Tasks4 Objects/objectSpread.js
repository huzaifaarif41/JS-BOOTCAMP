//to make a copy of an object
//ex-01
const circle= {
    radius: 54
}

const coloredCircle= {
    ...circle,
    color: 'black'
}

console.log(coloredCircle)

//ex-02
const circle = {
    radius: 10,
    style: {
        color: 'blue'
    }
};

const clonedCircle = {
    ...circle
};


clonedCircle.style = 'red';

console.log(clonedCircle);  //{radius: 10, style: 'red'}

//ex-03

const circle = {
    radius: 10
};

const style = {
    backgroundColor: 'red'
};

const solidCircle = {
    ...circle,
    ...style
};

console.log(solidCircle);  //{ radius: 10, backgroundColor: 'red' }


