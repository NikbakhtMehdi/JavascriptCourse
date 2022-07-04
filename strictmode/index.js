"use strict";

var isStrict = (function () {
  return !this;
})();
console.log(`Start : In Strict Mode ${isStrict} `);

/////////////////////unknown var
// uknvar = 200;
// console.log(uknvar);
// console.log(window);
// ////in functions
// function m1() {
//   console.log(this);
// }
// m1();

///////////////////////reserved words
// function ch(interface) {
//   console.log(interface);
// }
// ch(11);

// //////////////////////octal literal
// var m = 0o71;
// console.log(m);

/////////////////////WITH statement
// with (Math) {
//   console.log(PI);
// }

////////////////////// eval, arguments
//var eval = "mehdi";

// function checkvar(eval, arguments) {
//   console.log(eval, arguments);
// }

// checkvar(12, 5);

// function arguments(a) {
//   console.log(a);
// }

// arguments(5);

// function eval(a, b) {
//   console.log(a);
// }

// eval(2, 3);

////////////////////two function parameters with same name
// function f(a, b, b) {
//   console.log(a, b, b);
// }

// f(1, 2, 3);

//////////////////////Declaring twice the same name for a property name in an object literal!
//var obj = { a: 1, a: 2 };

/////////////////////Delete variables and non-configurable property
// var m1 = "test";
// console.log(m1);
// delete m1;
// console.log(m1);
// delete Object.prototype;

/////////////////////unknown var in functions
// function f(x) {
//   //use strict";
//   var a = 12;
//   b = a + x * 35; // error!
//   function f2(h) {
//     c = h;
//   }
//   f2(1000);
//   console.log(this);
//   console.log(window);
// }
// //f(42)
// const h = new f(42);

//////////////////////Writing to a read-only property is not allowed
// var obj1 = {};
// Object.defineProperty(obj1, "x", { value: 0, writable: false });
// obj1.x = 10;
// console.log(obj1.x);

// //////////////////////EVAL
// eval("var p1 = 3000");
// console.log(p1);

// var s = document.getElementById("thing").style;
// s.opacity = 1;
// (function () {
//   if ((s.opacity -= 0.1) < 0) s.display = "none";
//   else setTimeout(arguments.callee, 40);
// })();

// ("use strict");
// var s = document.getElementById("thing").style;
// s.opacity = 1;
// (function fadeOut() {
//   // name the function
//   if ((s.opacity -= 0.1) < 0) s.display = "none";
//   else setTimeout(fadeOut, 40); // use the name of the function
// })();

//////////////////////////caller callee arguments
function foo(a, b) {
  console.log(a, b);
  console.log(arguments[0], arguments[1], arguments[2]);
  console.log("**************************************");
  a = 8;
  b = 9;
  console.log(a, b);
  console.log(arguments[0], arguments[1], arguments[2]);
  console.log("**************************************");
  arguments[0] = 90;
  arguments[1] = 100;

  console.log(a, b);
  console.log(arguments[0], arguments[1], arguments[2]);
  console.log("**************************************");
  console.log(arguments.callee);
}
foo(1, 5, 7);
