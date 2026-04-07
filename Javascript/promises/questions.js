// questions

// ques 1:
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1); // ye sync code hai
//   resolve(2);
// });

// promise1.then((res) => console.log(res));

// console.log("end"); // output: start 1 end 2

// ques 2:

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1); // ye sync code hai
//   resolve(2); // resolve wala last me aayega
//   console.log(3);
// });

// promise1.then((res) => console.log(res));

// console.log("end"); // output: start 1 3 end 2

// ques 3:

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1); // ye sync code hai
//   console.log(3);
// });

// promise1.then((res) => console.log("result" + res));

// console.log("end"); // output: start 1 3 end

// ques 4:

// console.log("start");

// const fn = () => {
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// };

// console.log("middle");

// // middle ke baad 1 aayega kyuki fn middel ke baad call hua hai
// fn().then((res) => {
//   console.log(res);
// });

// console.log("end"); // output: start middle 1 end success

// ques 5:

// function job() {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// }

// let promise = job();

// promise
//   .then(() => {
//     console.log("success 1");
//   })
//   .then(() => {
//     console.log("success 2");
//   })
//   .then(() => {
//     console.log("success 3");
//   })
//   .catch(() => {
//     console.log("Error 1");
//   })
//   .then(() => {
//     console.log("success 4");
//   }); // output success 4

// ques 6:

// function job(state) {
//   return new Promise((resolve, reject) => {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then((data) => {
//     console.log(data);

//     return job(false);
//   })
//   .catch((error) => {
//     console.log(error);
//     return "error caught";
//   })
//   .then((data) => {
//     console.log(data);
//     return job(true);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); // output: success error error caught
// last me error caught isliye hoga kyuki third then me data true hoga isliye "error caught" show hoga

// ques 7:

// function job(state) {
//   return new Promise((resolve, reject) => {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);
//     return job(true); // success
//   })
//   .then(function (data) {
//     if (data !== "victory") {
//       throw "defeat"; // defeat ji wajah se ye catch par jayega
//     }
//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//     return job(false); // error
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch((error) => {
//     console.log(error);
//     return "Error Caught"; // error caught
//   })
//   .then((data) => {
//     console.log(data);
//     return new Error("test");
//   })
//   .then((data) => {
//     console.log("sucess", data.message); // success
//   });

// ques 6: promise chaining

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("first!");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => console.log(res));

// ques 7:

// async function loadJson(url) {
//   const response = await fetch(url);
//   if (response.status == 200) {
//     const data = await response.json();
//     return data.data;
//   } else {
//     throw new Error(response.status);
//   }
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
//   console.log(err),
// );

// ques 8: solve promise recursive

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
      resolve(video);
    }, 1000);
  });
}

// ye hai resursive promnise call
// function promRecurse(func) {
//   if (func.length === 0) return;

//   let currPromise = func.shift();

//   currPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//   promRecurse(func);
// }

// promRecurse([importantAction("Dheeraj"), likeTheVideo("video")]);

// promise polyfill

// function PromisePolyfill(executor) {
//   let onResolve,
//     onReject,
//     isResolved = false,
//     isRejected = false,
//     value;

//   function resolve(val) {
//     isResolved = true;
//     value = val;

//     if (onResolve) {
//       onResolve(val);
//     }
//   }

//   function reject(val) {
//     isRejected = true;
//     value = val;

//     if (onReject) {
//       onReject(val);
//     }
//   }

//   this.then = function (callback) {
//     onResolve = callback;

//     if (isResolved) {
//       onResolve(value);
//     }

//     return this;
//   };

//   this.catch = function (callback) {
//     onReject = callback;

//     if (isRejected) {
//       onReject(value);
//     }

//     return this;
//   };

//   executor(resolve, reject);
// }

// // use the polyfill

// const example = new PromisePolyfill((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// example
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise.all polyfill

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const result = [];

    if (!promises.length) {
      resolve(result);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        result[index] = res;
        pending--;

        if (pending === 0) {
          resolve(result);
        }
      }, reject);
    });
  });
};

Promise.allPolyfill([importantAction("Dheeraj"), likeTheVideo("video")])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
