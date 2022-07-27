"use strict";
console.log("Start");
//Context
//This
//argumnents --functions
//LexicalEnvirnment
//VariableEnvirnment
//GlobalContext(1)
//This :window/global

//Function Context
//This Caller Obj
//Arrow Functions
//This Lexical
// console.log(this);
// function f1() {
//   console.log(this);
// }
// //f1();
// function Person(name) {
//   this.name = name;
//   this.fp = function () {
//     console.log(this);
//   };
//   this.fr = () => {
//     console.log(this);
//   };
// }
// //call apply bind
// const p1 = new Person("A");
// const p2 = new Person("B");

// p1.fp.call({}, "Mehdi");
// const f = p1.fp.bind({ a: 3 }, "Mehdi");
// f();
// p2.fp.apply({}, ["Ali"]);

// function Test(a,b) {
//   console.log(arguments);
//   console.log(b);
// }
// Test(1, 2, 5);
//const a = 017;
//console.dir(a);
// console.log(this);
// function Test() {
//   console.log(this);
// }
//Test();
// const btn = document.querySelector("#btn");
// //btn.addEventListener("click", myfunc.bind({}, 10, 20));

// class
//   Method
//   Properties

// obj:class
// obj1.method()
// obj2.Method()
// obj1.name
// obj2.name

// const obj1 = {
//   p1: "Hi",
// };
// console.log(obj1);

// function Person(name, n1 = 0) {
//   this.Name = name;
//   Person.prototype.getName = function () {
//     console.log("Hi, ", this.Name, this.mynumber);
//   };
//   Person.prototype.mynumber = n1;
// }

// const p1 = new Person("Mehdi", 1);
// const p2 = new Person("Ali", 2);
// const p3 = new Person("Reza", 4);
// const p4 = new Person("vahid", 3);
// const p5 = new Person("iman", 5);
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);
// console.log(p5);
// p1.getName();
// p2.getName();
// p3.getName();
// p4.getName();
// p5.getName();

///////////////////////////////////////////////
// function Book() {
//   this.Name = "C#";
// }

// const BookProto = {
//   getName() {
//     return this.Name;
//   },
//   getCapitalName() {
//     return this.Name.upper();
//   },
// };

// const cbook = new Book();
// const dbook = Object.create(null);
// console.log(cbook);
// console.log(dbook);
//Object Properties
// const obj1 = {
//   pr1: 5,
//   pr2: 7,
// };
// console.log(Object.getOwnPropertyDescriptor(obj1, "pr2"));
// Object.defineProperty(obj1, "pr2", {
//   value: 25,
//   writable: false,
//   enumerable: true,
//   configurable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(obj1, "pr2"));
// console.log(obj1);
// Object.defineProperty(obj1, "pr3", {
//   value: 9,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// console.log(Object.getOwnPropertyDescriptor(obj1, "pr3"));
// Object.defineProperty(obj1, "pr3", {
//   writable: false,
//   enumerable: true,
//   configurable: true,
// });

// for (const a1 in obj1) {
//   console.log(a1);
// }
// console.log(Object.getOwnPropertyDescriptor(obj1, "pr3"));
//console.log(obj1);

//from MDN samples
// const o2 = Object.create(
//   {},
//   {
//     p: {
//       value: 42,
//       writable: false,
//       enumerable: false,
//       configurable: true,
//     },
//     q: { value: 10, writable: true, enumerable: true },
//   }
// );
// o2.newprop = 3;
// console.dir(o2);
// Object.defineProperty(o2, "p", { writable: true, enumerable: true });
// o2.p = "88";
// console.log(Object.getOwnPropertyDescriptor(o2, "p"));
// for (const prop in o2) {
//   console.log(prop);
//   console.log(o2[prop]);
// }
//////////////////////////////////////////////
//console.log("Type Of Object :", typeof Object);
//console.dir(Object);
// console.log("Object.prototype :", Object.prototype); //anonymouse object
// console.log(
//   "Object.prototype.constructor: ",
//   Object.prototype.constructor === Object
// );

// var obj = { name: "obj1", id: "500", category: "D", level: 2 };

// console.log(obj);
// obj.printName = function () {
//   console.log("Print Obj 1");
// };
// // console.log("Person.__proto__:", obj.__proto__);
// // console.log("obj.prototype : ", obj.prototype);
// console.log("Object.getPrototypeOf(obj) : ", Object.getPrototypeOf(obj));
// // console.log("-------------------------");
// var obj2 = { name: "obj2", id: "1000", category: "A", level: 3 };
// obj2.printName = function () {
//   console.log("Print obj2");
// };
// console.log(obj2);
// console.log("Object.getPrototypeOf(obj2)", Object.getPrototypeOf(obj2));
// console.log("-------------------------");

// Object.setPrototypeOf(obj, obj2);
// console.dir(obj);
// console.log("Object.getPrototypeOf(obj)", Object.getPrototypeOf(obj));
// console.log(obj.level);
// obj.printName();
// console.log("-------------------------");
// const a = "0";
// Object.setPrototypeOf(a, obj);
// console.log(Object.getPrototypeOf(a));

function Person(name) {
  this.name = name;
}

const obj = {};
console.dir(Person.__proto__);
console.log(obj.__proto__);

const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
  },
};

console.log(o);

// Person.__proto__.fn1 = function () {
//   console.log("fn1");
// };
// Person.prototype.fn2 = function () {
//   console.log("fn2");
// };
// console.log("prototype");
// console.dir(Person.prototype);
// console.log("__proto__");
// console.dir(Person.__proto__);
// Person.fn1();
//Person.fn2();

// const p1 = new Person();
// console.dir(p1);

// console.dir(Person);
// console.log("Person.prototype :", Person.prototype);
// console.log("Person.__proto__:", Person.__proto__);
// console.log("Object.getPrototypeOf(Person):", Object.getPrototypeOf(Person));

// Person.prototype.greet = function () {
//   return "Hi, I'm " + this.name + "!";
// };
// let p1 = new Person("John");
// console.log(p1);
// console.log(p1.__proto__);

// let greeting = p1.greet();
// console.log(greeting);

// // let s = p1.toString();
// // console.log(s);

// let p2 = new Person("Jane");

// p1.draw = function () {
//   return "I can draw.";
// };

// p1.draw();
//p2.draw();

// console.log(p1.__proto__ === Person.prototype); // true
// console.log(p1.__proto__ === p2.__proto__); // true

// console.log(Object.getPrototypeOf(p1));
// console.log(Object.getPrototypeOf(p2));

// console.log(p1.__proto__);
// console.log(p2.__proto__);
// console.log(p1.constructor.prototype);
// console.log(p2.constructor.prototype);

// const obj = {
//   mytext() {
//     console.log("Ok");
//   },
// };

// obj.mytext();
// obj.__proto__.m1 = function () {
//   console.log("Test");
// };
// obj.m1();
// console.log(Object.getPrototypeOf(obj));
// const obj3 = Object.create(obj2, {
//   p: {
//     value: 42,
//     writable: false,
//     enumerable: false,
//     configurable: true,
//   },
// });
// let a = "22";
// Object.setPrototypeOf(null, obj2);
// console.log(a.__proto__);

//obj2.printName();
