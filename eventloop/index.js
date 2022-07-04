"use strict";
console.log("Start");
console.time("m1");
// function firstExample(a) {
//   console.log(`MacroTask : ${a}`);
//   if (a < 1000) setTimeout(() => firstExample(a + 1), 0);
// }

//firstExample(1);
// function circular(i) {
//   let a = 5;
//   let str = "";
//   let dd = function () {
//     let d = 0;
//   };
//   console.log(i);
//   circular(i + 1);
// }
// circular(1);

const r = function () {
  requestAnimationFrame(() => {
    console.log("rAF");
    requestAnimationFrame(r);
  });
};
//r();
console.timeEnd("m1");
const f = function (a) {
  fetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
  ).then(() => {
    console.log(`uri Loaded ${a}`);
    setTimeout(() => {
      queueMicrotask(() => console.log(`Special Micro ${a} : 1`));
      console.log(`Time Out  ${a} : 1`);
    }, 0);

    setTimeout(() => {
      console.log(`Time Out  ${a} : 2`);
    }, 0);
    queueMicrotask(() => console.log(`Micro ${a} : 1`));
    queueMicrotask(() => console.log(`Micro ${a} : 2`));
    queueMicrotask(() => console.log(`Micro ${a} : 3`));
  });
};

f(1);
console.log("L1");
f(2);
console.log("L2");
f(3);
console.log("L3");
f(4);
console.log("L4");
f(5);
console.log("L5");
// let i = 0;
// while (true) {
//   if (++i > 1000000000) break;
// }

// setTimeout(() => {
//   console.log("Time out 1");

//   queueMicrotask(() => console.log("Timeout Micro 1:  1"));
//   queueMicrotask(() => console.log("Timeout Micro 1:  2"));
//   queueMicrotask(() => console.log("Timeout Micro 1:  3"));
// }, 0);

// setTimeout(() => {
//   console.log("Time out 2");
//   queueMicrotask(() => console.log("Timeout Micro 2:  1"));
//   queueMicrotask(() => console.log("Timeout Micro 2:  2"));
//   queueMicrotask(() => console.log("Timeout Micro 2:  3"));
// }, 0);

// queueMicrotask(() => console.log("Micro Task 1"));
// queueMicrotask(() => console.log("Micro Task 2"));
// queueMicrotask(() => console.log("Micro Task 3"));
// queueMicrotask(() => console.log("Micro Task 4"));
// queueMicrotask(() => console.log("Micro Task 5"));
// console.log("Task 1");

// firstExample();

// }, 0);
// setTimeout(() => {
//   console.log("TT2");
//   queueMicrotask(() => console.log("S2MT1"));
//   queueMicrotask(() => console.log("S2MT2"));
//   queueMicrotask(() => console.log("S2MT3"));
//   queueMicrotask(() => console.log("S2MT4"));
//   queueMicrotask(() => console.log("S2MT5"));
// }, 0);

// console.log("Sync 4");

// requestAnimationFrame();
// setInterval();
// setTimeout();
// fetch();

//const btn = document.getElementById("btn");
// const btn1 = document.getElementById("btn1");

// console.log(btn);
//btn.addEventListener("click", move);
// btn1.addEventListener("click", set);

// const box = document.getElementById("box");
// function move() {
//   box.style.transform = "translateX(1000px)";
//   box.style.transition = "transform 1s ease-in-out";
//   box.style.transform = "translateX(500px)";
// }

// function set() {

// }

////////////////////////////////////////
// function foo() {
//   console.log("foo");
// }
// function bar() {
//   setTimeout(foo);
//   console.log("bar");
// }
// function baz() {
//   setTimeout(() => console.log("baz"));
// }
// function liz() {
//   requestAnimationFrame(() => console.log("liz"));
// }
// function rep() {
//   Promise.resolve().then(() => console.log("rep"));
// }
// console.log("start");
// foo();
// bar();
// baz();
// liz();
// rep();
// console.log("end");
