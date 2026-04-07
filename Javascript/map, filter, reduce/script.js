// map, filter and reduce

// what is map?

// ye array ke har ek elem me kuch operations ko apply karne me use hota hai.
// ye hume output me new array return karta hai

// const nums = [1, 2, 3, 4];
// const newArr = nums.map((item) => item * 2);
// console.log(newArr);

// what is filter?
// filter wo hi chizo par operate karega jiski condition true hogi

// const nums = [1, 2, 3, 4];
// const elemMoreThanTwo = nums.filter((item) => item > 2);
// console.log(elemMoreThanTwo);

// what is reduce method?
// reduce method array ke abhi elem ko ek deigit me combine karta hai like sum of all elem or sustract all elem;

// const nums = [1, 2, 3, 4];
// const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(totalSum);
// acc me prevValue hoti hai or curr me arr ka elem.

// map polyfill
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// filter polyfill
// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// reduce polyfill

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], this) : this[i];
//   }
//   return accumulator;
// };
