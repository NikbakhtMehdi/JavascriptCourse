"use strict";
console.log("Start");

// const s = {
//   f: 5,
//   h: 6,
// };

// s.f = 6;
// console.log(s.f);

// s = { f: 0, h: 9 };
// console.log(s.f);
function printNumber() {
  //let number = 58;
  {
    let i = 7;
    console.log(i);
  }

  console.log(i);
}
//global scope
var i = 9;
function log() {
  //function scope
  //number = 54;
  let i = 8;

  {
    //block scope
    const i = 5;
    var j = 0;
    console.log(i);
  }
  console.log(i);
  //printNumber();
}

log();
console.log(i);
