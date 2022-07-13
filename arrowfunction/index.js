"use strict";
console.log("Start");

// const f1 = (a = 9) => console.log(a);
// console.log(f1());

// //Arrow Functions
// //Function declaration
// function myFunc() {}
// //Function Experssion
// //const arguments = [10, 20];

// const func = function (a, b) {
//   console.log("Regular Function: ", "This", this);
//   console.log("Regular Function: ", "Params", a, b);
//   console.log("Regular Function: ", "arguments", arguments);
//   if (new.target) {
//     console.log("Executed from new");
//   } else {
//     console.log("Executed from Function Call");
//   }
//   console.log("Regular Function: ", "new.target", new.target);
// };

// const arfunc = (a, b) => {
//   console.log("Arrow Function: ", "This", this);
//   console.log("Arrow Function: ", "Params", a, b);
//   //console.log("Arrow Function: ", "Arguments", arguments);
//   //console.log("Arrow Function: ", "new.target", new.target);
// };

// const func2 = function () {
//   const f = () => {
//     console.log("Arrow In Regular : ", "this ", this);
//     console.log("Arrow In Regular : ", "New.Target ", new.target);
//   };
//   f();
// };

// //func(1, 2);
// //new func(1, 2);
// //arfunc(1, 2);
// //func2();
// //new func2();
// func(50, 500);
// console.log("-----------------------------------");
// const reg = func.bind({}, 20, 50);
// reg();
// console.log("-----------------------------------");
// arfunc(50, 500);
// console.log("-----------------------------------");
// const s = arfunc.bind({}, 1, 5);
// s();

const obj = {
  reg: function () {
    console.log("Object RegularFunction", "This", this);
  },
  arr: () => {
    console.log("Object ArrowFunction", "This", this);
  },
};

obj.reg();
obj.arr();
