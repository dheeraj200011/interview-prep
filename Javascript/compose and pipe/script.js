// compose
// ye basically rigt to left func se iterate karta hua solution nikalta hai

// ex:

const addFive = (num) => {
  return num + 5;
};

const substractTwo = (num) => {
  return num - 2;
};

const nultiply = (num) => {
  return num * 4;
};

// first me manual compose function bnaunga and then reduce ka use karunge

const evaluate = pipe(addFive, substractTwo, nultiply);
console.log(evaluate(5));
// compose me right to left process hoga
// phle multiply se number niklega wo substract ke num me jayega than add ke num me

// function compose(...fns) {
//   return function (init) {
//     let result = init;
//     for (let i = fns.length - 1; i >= 0; i--) {
//       result = fns[i](result);
//     }
//     return result;
//   };
// }

// reduce
// function compose(...fns) {
//   return function (init) {
//     return fns.reduceRight((acc, curr) => {
//       return curr(acc);
//     }, init);
//   };
// }

// pipe
// ye left to right work karta hai

// function pipe(...fns) {
//   return function (init) {
//     return fns.reduce((acc, curr) => {
//       return curr(acc);
//     }, init);
//   };
// }

// function pipe(...fns) {
//   return function (init) {
//     let result = init;
//     for (let i = 0; i < fns.length; i++) {
//       result = fns[i](result);
//     }
//     return result;
//   };
// }
