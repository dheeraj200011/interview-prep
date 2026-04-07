// what is event loop ?
// event loop ek traffic controoloer ki tarah work kart ahi jiska kaam hai jo code asynchronous hai use ek orderly manner me kaam karana
// phle synchronous code chalgea or async wale ko microtask or macrotask me chalana

// why we need event loop to manage these task queue and microtask queue ?
// kyuki ye microtask queue (promise) ko phle chlati hai use baad task queue(settimeout)

// blockmainthread();

// console.log("start");

// function blockmainthread() {
//   let start = Date.now();
//   while (Date.now() - start < 3000) {} // while loop sync me run hoga lekin 3 sec tak block rhega
//   console.log("running");
// }

// console.log("end");

// ques 5:

// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a();
