"use strict";
console.log("Start");
queueMicrotask(() => console.log("Micro 1"));
queueMicrotask(() => console.log("Micro 2"));
queueMicrotask(() => console.log("Micro 3"));
setTimeout(() => console.log("Macro 1"), 0);
setTimeout(() => console.log("Macro 2"), 0);
setTimeout(() => console.log("Macro 3"), 0);
setTimeout(() => console.log("Macro 4"), 0);
setTimeout(() => console.log("Macro 5"), 0);
const myname = "Mehdi";
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log(jj);
  console.log(window.jj);
  console.log(this.jj);
});

// var x = 6;
// var x = 2;
// console.log(x);
// const f = () => {
//   console.log(this);
// };

// f();
// test();
// var x = 5;
// console.log(x);
// let x2 = 7;
// console.log(x2);
// //const x1 = 6;

// function test() {
//   console.log(this);
//   console.log(arguments);
// }

// const f1 = () => {
//   console.log(arguments);
// };
// f1();

// function test() {
//   var x = 3;
//   var s =
//     "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj";
//   console.log("test");
//   test();
// }
// test();
