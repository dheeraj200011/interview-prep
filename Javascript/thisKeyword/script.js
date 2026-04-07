// explain "this" keyword ?

// this.a = 5;
// console.log(this); // output : { a: 5 }
// // ye ek object return karega

// const getParam = () => {
//   console.log(this.a);
// };

// getParam(); // output: 5

// normal this keyword

// const user = {
//   name: "Dheeraj",
//   age: 30,
//   getName() {
//     console.log(this.name);
//   },
// };

// user.getName(); // output: Dheeraj

// arrow function this keyword
// isme this apne parent function se data ko get karta hai
// shiun tarika ye hai

// const user = {
//   name: "Dheeraj",
//   age: 30,
//   getDetails() {
//     const newFuction = () => {
//       console.log(this.name);
//     };
//     newFuction();
//   },
// };

// user.getDetails();

// this keyword in class constructors

// class user {
//   constructor(n) {
//     this.name = n;
//   }

//   getName() {
//     console.log(this.name);
//   }
// }

// const User = new user("dheeraj"); // output: dheeraj

// questions

// ques 1:

// const user = {
//   firstname: "Dheeraj",
//   getName() {
//     const firstname = "dheeraj";
//     return this.firstname;
//   },
// };

// console.log(user.getName()); // output: Dheeraj
// ye parent ke firstname ko target karega

// ques 2:

// function makeUser() {
//   return {
//     name: "Dheeraj",
//     ref: this,
//   };
// }

// let user = makeUser();
// console.log(user.ref.name); // output: undefined
// ye apne window ko target karega
// isse solve karne ke liye line: ref () { return this}
// hum ref ko func me convert kar denge isse this uska parent jo jayega jisme name hai

// ques 3:

// const user = {
//   name: "Dheeraj",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// console.log(user.logMessage, 1000);

// solution

// const user = {
//   name: "Dheeraj",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(function () {
//   user.logMessage();
// }, 1000);

// ques 4:

// const user = {
//   name: "Dheeraj",
//   greet() {
//     return `Hello, ${this.name}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.name}!`;
//   },
// };

// console.log(user.greet());
// console.log(user.farewell());

// ques 5:

// let calculator = {
//   value() {
//     this.a = +prompt("a = ", 0);
//     this.b = +prompt("b = ", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.value();
// console.log(calculator.sum());
// console.log(calculator.mul());

// ques 6:

// var length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   // ye code window ko target karega
//   method(fn) {
//     fn();
//   },
// };

// object.method(callback); // outpuit : 4
// // to output me 4 aayega

// ques6:

// var length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   // ye code window ko target karega
//   method() {
//     arguments[0](); // arguments: [callback, 2, 3] // to ye upar se this.length lega jo array ka length hoga 3
//   },
// };

// object.method(callback, 2, 3); // output: 3

// ques 7:

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  substract(s) {
    this.total -= s;
    return this;
  },
  multiply(m) {
    this.total *= m;
    return this;
  },
};

const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);
