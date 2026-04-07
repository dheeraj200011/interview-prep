// const btn = document.querySelector(".button");
// const btnPress = document.querySelector(".pressed_count");
// const count = document.querySelector(".triggered_count");

// let pressedCount = 0;
// let triggeredCount = 0;

// const start = new Date().getTime();

// btn.addEventListener("click", () => {
//   console.log("BUTTON PRESSED X TIMES");
//   btnPress.innerHTML = ++pressedCount;
//   setTimeout(() => {
//     const now = new Date().getTime();
//     console.log(start - now);
//     count.innerHTML = ++triggeredCount;
//   }, 800);
// });

// what is debounce ?
// Debounce tab execute hota hai jab hum event perform karna band kar dete hain (specified delay ke baad).

// what is throttle ?
// Throttle ek fixed interval par function ko execute karta hai, chahe event kitni bhi baar trigger ho.

// Note: inbuilt ke liye lodash ka use karenge

// debounce polyfill

const myDebounce = (cb, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

// throttle polyfill

const myThrottle = (cb, delay) => {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};
