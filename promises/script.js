// Promises in javascript
// synchronous vs Asynchronous code

// create a simple promise

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let result = true;
//     if (result) {
//       resolve("this is resolved");
//     } else {
//       reject("this is rejected");
//     }
//   });
// });

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// use promises on the behalf of callbacks

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`get the ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("like the video");
    }, 1000);
  });
}

// importantAction("Dheeraj")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("video");
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// ab hum promise combinator ka use karenge

// 1: promise.all
// isme ek bhi promise fail hua to promise error me jayega
// Promise.all([importantAction("Dheeraj"), likeTheVideo("video")])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// 2: promise.race
// Promise.race([importantAction("Dheeraj"), likeTheVideo("video")])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// 3: promise.settled
// isme rejected or fullfilled dono aate hai
// Promise.allSettled([importantAction("Dheeraj"), likeTheVideo("video")])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// 4: promise.any
// isme jo fullfilled hai wo hi aayega rejected nhi aayega

// promise with async/await ye mordern way hai

// const result = async () => {
//   try {
//     const message1 = await importantAction("Dheeraj");
//     const message2 = await likeTheVideo("video");

//     console.log({ message1, message2 });
//   } catch (error) {
//     console.log(error);
//   }
// };

// result();
