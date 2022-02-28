//The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function
//or executes a code snippet, with a fixed time delay between each call.
//setInterval() method repeats a block of code at every given timing event.
//This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().

//ex-01
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // return the time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)
// }

// let display = setInterval(showTime, 5000);

//ex-02
let count = 0;

let interval = setInterval(function () {
  count += 1;

  // when count equals to 5, stop the function
  if (count === 5) {
    clearInterval(interval);
  }

  // display the current time
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);
