//"use strict";
console.log("Start");

// console.log(this);
// function func1() {
//   console.log(this);
// }

// func1();

// function Person() {
//   //this={}
//   this.func1 = function () {
//     console.log(this);
//   };
// }

// const p1 = new Person();
// //console.log(p1);
//p1.func1();
// const btn = document.querySelector("#btn");
// //btn.addEventListener("click", myfunc.bind({}, 10, 20));

// const myarr = ["Ali", "Reza", "Mehdi"];
// //Simple for
// //map
// //foreach
// function Book() {
//   this.Name = "Book1";
//   const self = this;
//   myarr.forEach((item) => console.log(`${self.Name}:${item}`));
// }

// const b1 = new Book();

//objects
//Methods vs Functions

//Implicit Binding

//Explicit Binding
//call, apply, bind
// function myfunc(a, b) {
//   console.log(this);
//   console.log(a, b);
// }

//myfunc.call({}, 10, 12);
//const a = [102, 10];
//myfunc.apply({ mycomp: 7 }, a);
//const f = myfunc.bind({ obj: 0 }, 200, 70);
//console.dir(f);
//f();

//new Binding
//this = {}
//window binding

// const obj1 = {
//   a: 1,
//   b: 2,
//   c: function () {},
// };

// function Person(name) {
//   //this = {}
//   this.SetFirstName = function (name1) {
//     if (name1[0] === "$") {
//       return;
//     }
//     this.FirstName = name1;
//   };
//   this.SetFirstName(name);
//   console.log(this.FirstName);
// }

// const per1 = new Person("Mehdi");
// console.log(per1);
console.log("---------Literal Object------------");
const obj2 = {
  arrfunc: () => {
    console.log("Arrow Function This: ", this);
  },
  regfunc: function () {
    console.log("Regular Function This:", this);
  },
};
obj2.arrfunc();
obj2.regfunc();
console.log("---------Constructor Function---------");

function Person() {
  this.arrfunc = () => {
    console.log("Arrow Function This: ", this);
  };
  this.regfunc = function () {
    console.log("Regular Function This:", this);
  };
}

const obj3 = new Person();
obj3.arrfunc();
obj3.regfunc();

console.log("--------- Function---------");
const obj4 = Person();
obj4.arrfunc();
obj4.regfunc();
