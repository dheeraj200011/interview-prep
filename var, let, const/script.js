// var let const
// scope

// global scope
// ye variable kahi par bhi call ya apply kiya ja sakte hai

// Example
var a = 5; // ye global scope ka variable hai

// block scope
// ye basicalluy  {} iske andar call hone wale varibale hote hai
// Example
// {let b = 6} // ab ye yhi par call ho sakte hai bs iske bahar ye varibale work nhi karega
// iss case me var outside me call ho jayega kyuki var function scoped hota hai
// whi let or const block scoped hote hai

// interview problem

// function test() {
//   var a = "Hello";
//   let b = "bye";

//   if (true) {
//     let a = "Hi";
//     var b = "GoodBye";
//     console.log(a);
//     console.log(b);
//   }
// }

// test();

// reason let kabhi var se chnge nhi hoga
// jabki var let me change ho jayega beacuse of es6

// Declaration

// var ka ek variable multiple times redeclare ho sakta hai
// let or const me ye chiz nhi hogi

// Declaration without initialisation

// var or  let ke case me ye work karega
// const me ye work nhi karega

// reinitialisation
// var a = 5; a = 6 it will change
// let a = 5; a = 6 it will also change
// const me ye work nhi karega

// Hoisting
// var ke case me ye undefined show karta hai
// function test() {
//   console.log(a);
//   var a = 10;
// }
// test();
// isme global me
// var a;
// console.log(a);
// a = 10
// iss type se work karega

// lekin let or const me
// ye reference error show karega
// isme bhi window me undefined hoga lekin temporal dead zone ki wajah se error show hoga
// temporal dead zone: Variable declare hone se pehle usko access nahi kar sakte, warna error aayega.
// Is time period ko Temporal Dead Zone bolte hain.
