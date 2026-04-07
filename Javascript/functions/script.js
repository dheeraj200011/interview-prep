// functions in javascript

// question 1: what is function declarations ?
// wo function jo name ke sath hote hai.

// function name () {} like this

// question 2 : function expression
// ye function variable ke sath hota hai
// const name = function () {} like this

// question 3: first class functions
// ye basically ek function ko dusre function me call karta hai or jo function phla hota hai wo hi first class function hotha hai
// example : map function best example hai first class function ka

// example
// yha greet first class func hai
// let greet = function () {
//   console.log("hello");
// };

// function sayHello(fn) {
//   fn();
// }

// sayHello(greet);

// question 4: IIFE (immediately invoked function expression)

// (function square(num) {
//   console.log(num * num);
// })(5);

// question 5: function hoisting
// function call me hoisting se joi fark nhi padta hum phle func ko call karke baad me function ko define kar sakte hai or wo work karega

// question 6: params and arguments
// function square (num) { // yha params hoga
// return num * num;
//}
// square(5) // or yha arguments hoga

// question 6: rest or spread operator
// function nums (...num) { // yha rest operatot hoga
//     return num[0] * num[1]
// }
// nums([...nums]) // yha spread operator

// output based question
// const fn = (a,...numbers, x, y) => {
//     console.log(x, y)
// }
// fn(5,6,3,7

// function fn() {
//   console.log(arguments);
// }

// fn(1, 2, 3); // output: [Arguments] { '0': 1, '1': 2, '2': 3 }
