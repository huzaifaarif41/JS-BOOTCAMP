//self invoking Functions/IIFE
//it runs as soon as it defined. we didnt neeed to call a func. It cant use on a global scope. Only limited on a local scope

//ex01
(function () {
  console.log('HELLLLWWW');
})();

//ex02
(function (b, c) {
  console.log(b + c);
})(5, 11);

//ex03

let name = {
  firstName: 'Huzaifa',
  lastName: 'Ariff'
};

(function(){
  console.log(name.firstName + ' ' + name.lastName)
}) (name)