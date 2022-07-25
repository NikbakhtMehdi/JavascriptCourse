//"use strict";
console.log("Start");

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
function Book() {
  this.Name = "C#";
}

const BookProto = {
  getName() {
    return this.Name;
  },
  getCapitalName() {
    return this.Name.upper();
  },
};

const cbook = new Book();
const dbook = Object.create(BookProto);
console.log(cbook);
console.log(dbook);
