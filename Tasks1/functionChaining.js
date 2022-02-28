//ex-01
// const name= 'Huzaifa Arif'

// const reverse= name.split("").reverse().join('')

// console.log(reverse)

//ex-02

var Obj = {
    result: 0,
    addNumber: function(a, b) {
      this.result = a + b; 
      return this;
    },
  
    multiplyNumber: function(a) {
      this.result = this.result * a;
      return this;
    } 
  };
  
  Obj.addNumber(10, 20).multiplyNumber(10)
  console.log(Obj.result)