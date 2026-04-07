// what is event propagation ?
// jab DOM me koi event (jaise click) trigger hota hai, to wo element se parent elements tak travel karta hai ek specific order me.

// what is event bubbling ?
// ye down to up trigger hota hai agar humne sabhi me eventlistner lga rakhe hai
// isse rokne ke liye (e.stoppropagtion) ka use hoga

// const div = document.querySelector("div");
// const from = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", () => {
//   alert("div");
// });

// from.addEventListener(
//   "click",
//   () => {
//     alert("form");
//   },
//   true,
// );

// button.addEventListener("click", (e) => {
//   alert("button");
// });

// what is event capturing ?
// ye top to bottom chalta hai.

// div.addEventListener(
//   "click",
//   () => {
//     alert("div");
//   },
//   {
//     capture: true,
//   },
// );

// what is event deligation ?
// Event Delegation is a technique where a single event listener is attached to a parent element to manage events for multiple child elements using event bubbling.

// document.querySelector("div").addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     alert("button clicked");
//   }
// });

// create a modal jiske bahar click karne par modal hidden ho jaye.

const modal = document.querySelector(".modalContainer");
const modalButton = document.querySelector("#openBtn");
const overlay = document.querySelector("#overlay");

modalButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

overlay.addEventListener("click", (e) => {
  console.log(e);
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});
