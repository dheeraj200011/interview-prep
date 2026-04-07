// Objects in javascript

// const func = (function (a) {
//   delete a; // function me delete nhi chalega ye sirf object me chalega
//   return a;
// })(5);

// console.log(func);

// ques 2

// const user = {
//   name: "Dheeraj",
//   age: 31,
//   "like this video": true, // yha ye key ki tarh work karega
// };
// delete user["like this video"];
// console.log(user["like this video"]); // ye iss type se call hoga

// ques 3
// variable ko key or value kaise bnaye ?
// const key = "firstname";
// const value = "name";

// const user = {
//   [key]: value,
// };

// console.log(user.firstname);

// ques 4:
// get the all values via loop
// const user = {
//   name: "Dhaeeraj",
//   age: 24,
//   isAewsome: true,
// };

// function objValues(user) {
//   for (key in user) {
//     console.log(user[key]);
//   }
// }

// console.log(objValues(user));

// ques 5:
// agar object me ek se jayada same key ho

// const nums = {
//   a: "one",
//   b: "two",
//   a: "three",
// };

// console.log(nums); // output: { a: 'three', b: 'two' }

// isme one or three same key par hai iss case me top sam key par last same key ki value aa jayegi

// ques 6:

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// function multiplybytwo(obj) {
//   for (let key in obj) {
//     if (Number.isInteger(obj[key])) {
//       obj[key] = obj[key] * 2;
//     }
//   }
//   return obj;
// }

// console.log(multiplybytwo(nums));

// ques 7:

// const a = {};
// const b = { key: "b" }; // ye string me convert hoke "[object, object]" bnayega
// const c = { key: "c" }; // ye string me convert hoke "[object, object]" bnayega

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); // to ye by default last value ko lega
// output: 456

// ques 8
// const obj = {
//   name: "dheeraj",
//   age: 28,
// };

//console.log(JSON.stringify(obj)); // OUTPUT {"name":"dheeraj","age":28}
// console.log(JSON.parse(JSON.stringify(obj))); // output: { name: 'dheeraj', age: 28 }

// JOSN.stringify() key ko string me convert kar deta hai
// JSON.parse() Json.stringify() se hue change ko normal obj bna deta hai
// iska use hum local storage me karte hai

// ques 9
//console.log([..."Lydia"]); // output: [ 'L', 'y', 'd', 'i', 'a' ]

// ques 10

// const user = { name: "dheeraj", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin); // output: { admin: true, name: 'dheeraj', age: 21 }

// ques 11

// const settings = {
//   username: "Dheeraj",
//   level: 19,
//   health: 90,
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data); // output: {"level":19,"health":90}
// iss case me jo array me keys hai wo hi data show hoga

// ques 12
// destructuring issues

// let user = {
//   name: "Dheeraj",
//   age: 24,
// };

// let name = "Gupta";
// // yha issue hoga
// let { name: myName } = user;
// console.log(myName);
// // iss issue ko aise solve jkrenge

// ques 13

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);
// output : hello
// kyuki object me reference bna hai isliye c me change hoga to d me bhi hoga

// ques 14:
// console.log({ a: 1 } == { a: 1 }); // false
// console.log({ a: 1 } === { a: 1 }); // false
// kyuki object me different memory allocate hui hai isliye false aayega

// ques 15;

// let person = { name: "lydia" };
// const members = [person];
// person = null;

// console.log(members); // output: [ { name: 'lydia' } ]
// kyuki sirf variable ko change kiya jabki object me key ke through value change hoti hai like person.name = null to ye null hota
