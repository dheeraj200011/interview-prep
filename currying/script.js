// currying in javascript

// ques1:
// do this f(a, b) into f(a)(b)

// function f(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }

// f(5)(10);

// ques 2:

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

// ques 3:

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") {
//         return a + b;
//       } else if (operation === "multiply") {
//         return a * b;
//       } else if (operation === "divide") {
//         return a / b;
//       } else if (operation === "substract") {
//         return a - b;
//       } else {
//         console.log("no more operatiuons");
//       }
//     };
//   };
// }

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("substract")(4)(2));

// ques 4
// what is infinite curring?
// iske last me empty () dena ho nhi to ye result nhi dega

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(5)(2)(4)(8)());

// ques 5
// differebce b/w currying and partial application ?
// yha hum partial application ko samjhenge
// currying me jitmne arguments hote hai utne hi function hote hai
// parital me hum arguments gar 3 rakhrnge to function same return nhi honge

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// ab isme humne arguments 3 liye hai lekin function 2 ho call kiye hai ye partial applicaton hai.

// ques 7: make a normal function args to curry function

// function curry(func) {
//   return function curriedFunc(...args) {
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return function (...next) {
//         return curriedFunc(...args, ...next);
//       };
//     }
//   };
// }

// let sum = (a, b, c, d) => a + b + c + d;
// let totalSum = curry(sum);
// console.log(totalSum(1)(2)(3)(4));
