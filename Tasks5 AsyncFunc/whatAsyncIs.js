                         //*Synchronous Code
//first we need to learn Synchronous..
//Synchronous is most of the code which executes line by line and each line of code waits for previous line to finish..
//It will block long running operations to executes.. Perfect example is alert() , no code will execute untill alert() func window will be closed by a user.

//ex-01
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
//in this example, alert will be executed first and when we click the 'OK' to alert window, then the next code of paragraph will be executed

                        //*asynchronous code
//asynchronous code is executed after a task that runs in a background finishes..
//it is not blocking a code..
//execution doesnt wait for async task to finish its work..
//co-ordinating behaviour of a program over a period of time

