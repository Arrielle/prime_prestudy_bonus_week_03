var myNum = 6;

function add(x) {
return x + 2;
}

function multiply(y) {
return y * 3;
}

function subtract(z) {
return z - 4;
}

var final = add(multiply(subtract(myNum)));

/*
My inital code was much messier but I got some tips
from a friend that knows javascript. He said that with
my code the way it is, I could run into 'variable scope'
issues. I think this is much cleaner and makes my code
much more flexible.

Here is my initial code so you can see my thought process;

var myNum = 6;

function add(myNum) {
  myNum = myNum + 2;
  return myNum;
}
function multiply(myNum) {
  myNum = myNum * 3;
  return myNum;
}
function subtract(myNum) {
  myNum = myNum - 4;
  return myNum;
}

var final = add(multiply(subtract(myNum)));
*/
