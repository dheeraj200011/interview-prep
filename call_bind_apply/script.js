// call bind apply in javascript

// ques: 1
// what is call ?
// const obj = { name: "Dheeraj" };

// function sayHello(age) {
//   return "Hello" + this.name;
// }

// console.log(sayHello.call(obj, 24)); // output: Hello Dheeraj is 24

// what is apply ?
// apply me aother arguments array ke form me rakhe jate hai

// const obj = { name: "Dheeraj" };

// function sayHello(age, profession) {
//   return "Hello" + this.name + "age is" + age + profession;
// }

// console.log(sayHello.apply(obj, [24, "designer"]));

// what is bind ?
// bind me phle hum obj ko bind karte hai usse ek new func bnta hai jisme hum args ko define karta hai

// const obj = { name: "Dheeraj" };

// function sayHello(age, profession) {
//   return "Hello" + this.name + "age is" + age + profession;
// }

// const bindFunc = sayHello.bind(obj);
// console.log(bindFunc(24, "engineer"));

// ques 1:

// const person = { name: "Dheeraj" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 24));
// console.log(sayHi.bind(person, 24));

// ques 2:

// const age = 20;

// var person = {
//   name: "Dheeraj",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   },
// };

// var person2 = { age: 24 };
// console.log(person.getAge.call(person2));

// ques 3:

// var status = "goggle";

// setTimeout(() => {
//   // ya arrow function ki wajah se ye window ko target karega
//   const status = "heart";
//   const data = {
//     status: "avacado",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); // "avacado"
//   console.log(data.getStatus.call(this)); // google
// }, 0);

// ques 4:

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " ", this.species + ": " + this.name);
//   };

//   this.print();
// }

// for (let i = 0; i < animals.length; i++) {
//   console.log(printAnimals.call(animals[i], i));
// }

// ques 5:
// do array ko first array me push karna hai bina new array create jkare
// const array = ["a", "b"];
// const elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.log(array);

// ques 6:
// find min/max number ina an array
// const numbers = [5, 6, 2, 3, 7];
// console.log(Math.max.apply(null, numbers));

// ques 6:

// function f() {
//   console.log(this);
// }

// let user = {
//   g: f.bind(null),
// };

// user.g(); // window

// ques 7:
// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" });

// f(); // output: John
// bind kabhi chaining ko support nhi karta

// ques 8:

// function checkPassword(success, failed) {
//   let password = "Dheeraj";
//   if (password === "Dheeraj") {
//     success();
//   } else {
//     failed();
//   }
// }

// let user = {
//   name: "Dheeraj Gupta",
//   loginSucces() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFailed() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginSucces.bind(user), user.loginFailed.bind(user));

// ques 9:

// function checkPassword(ok, fail) {
//   let password = "Dheeraj";
//   if (password === "Dheeraj") {
//     ok();
//   } else {
//     fail();
//   }
// }

// let user = {
//   name: "Dheeraj Gupta",

//   login(result) {
//     console.log(this.name + (result ? "login success" : "login failed"));
//   },
// };

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

// ques 10:

// const age = 20;

// var person = {
//   name: "Dheeraj",
//   age: 20,
//   getArrow: () => console.log(this.age),
//   getAge: function () {
//     console.log(this.age);
//   },
// };

// var person2 = { age: 24 };
// person.getAge.call(person2); // 24
// person.getArrow.call(person2); // undefined

// polyfill for call, bind and apply

// call function

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "its not callable");
  }
  context.fn = this;
  context.fn(...args);
};

// Apply function

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "its not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("This is not an array");
  }
  context.fn = this;
  context.fn(...args);
};

// Bind Function

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "its not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
