// first hum lexical scope ko samjhenge
// closure ka means hot hai function ke parenrt se value ko child me use karke apne objective ko pura karna

// lexical scope: ye basically ek enviromnet hota hai jisme hum variable ko access karte hai

// ex: function outer() {
//   let a = 10;

//   function inner() {
//     console.log(a);
//   }

//   inner();
// }

// outer();

// issi chiz par closure depend hota hai

// closure scope chain
// ye 3 type ke hote hai ek func call par, outer function, global variable

// ex: ye fumction chaing nhi hai

// var e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // output: 20

// ques 1:
// let count = 0;

// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })(); // output: 1 0

// ques: 2 : what is shadowing
// ans: inner block elem apne outer variable ko shadow kar deta hai
// let a = 10;

// function test() {
//   let a = 20;
//   console.log(a);
// }

// test();
// console.log(a);
// yha shadowing hua hai

// ques 3:

// function createBase(num) {
//   return function (innerNum) {
//     console.log(innerNum + num);
//   };
// }

// let addSix = createBase(6);
// addSix(10);
// addSix(15); // output: 16, 21

// ques4:
// Time optimisation

// function find() {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();
// console.time("6");
// closure(6);
// console.timeEnd("6");
// closure(12);
// console.time("50");

// ques: 5

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   inner(i);
// }

// ques 6:

// function counter() {
//   let count = 0;

//   return function () {
//     console.log(count++);
//   };
// }

// let c = counter();
// c();
// c();

// ques 6:
// what is module pattern?
// ek function jo execute hoke object return karta hai

// let module = (function () {
//   let privateVar = "secret";

//   function privateMethod() {
//     console.log(privateVar);
//   }

//   return {
//     publicMethod: function () {
//       console.log(privateVar);
//       privateMethod();
//     },
//   };
// })();

// module.publicMethod(); // kyuki return me publicmethod hi hai

// ques 7:
// subscribe video if user subscribe it than subsribe message show else thank you message show

// let view;
// function likethevideo() {
//   let subsribe = false;
//   return function () {
//     if (subsribe === true) {
//       console.log("thanks for subsribe");
//     } else {
//       view = "Roadsode coder";
//       console.log("subscribe to", view);
//       subsribe = true;
//     }
//   };
// }

// let like = likethevideo();
// like();
// like();

// ques 8: function ko ek baar hi ran karna hai

// function once(fn, context) {
//   let ran;
//   return function () {
//     if (fn) {
//       ran = fn.apply(context || this, arguments);
//       fn = null;
//     }
//     return ran;
//   };
// }

// let hello = once(() => console.log("hello"));
// hello();
// hello();

// ques9:
// memoize function

// function memoize(fn, context) {
//   let res = {};

//   return function (...args) {
//     var argsCache = JSON.stringify(args);

//     if (!res[argsCache]) {
//       res[argsCache] = fn.call(context || this, ...args);
//       return res[argsCache]; // ✅ return added
//     } else {
//       return res[argsCache]; // ✅ return added
//     }
//   };
// }

// const clumsySquare = (num1, num2) => {
//   for (let i = 1; i < 1000000; i++) {}
//   return num1 * num2;
// };

// let memoNumber = memoize(clumsySquare);

// console.log(memoNumber(9467, 7649)); // calculated
// console.log(memoNumber(9467, 7649)); // from cache
