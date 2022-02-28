//We can add functions as properties on objects

//ex-01
const math = {
  add: function (x, y) {
    return x + y;
  },
  sub: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
};
console.log(math.add(2, 3)); //5
console.log(math.sub(2, 3)); //-1
console.log(math.multiply(2, 3)); //6
console.log(math.divide(6, 3)); //2

//ex-02
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  },
};

engine.start('noisily');
engine.sputter();

/* Console output:
  The engine starts up noisily...
  The engine sputters...
  */

//ex-03

const auth = {
  userName: 'Huzaifa',
  login() {
    console.log('LoggedIn'); // it means login : function(){}
  },
  logout() {
    console.log('Logged Out');
  },
};
auth.login(); //LoggedIn
