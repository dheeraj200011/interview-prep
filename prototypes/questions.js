// function Vehicle() {}
// Vehicle.prototype.drive = function () {
//   console.log("driving a vehicale");
// };

// function Car() {}
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;
// Car.prototype.drive = function () {
//   console.log("driving a car");
// };

// let vehicle = new Vehicle();
// let car = new Car();

// vehicle.drive();
// car.drive();

// output
// driving a vehicale
// driving a car

// question 2:
// diff beteween __proto__ and prototype?
// __proto__ JavaScript में एक hidden property (accessor) होता है जो किसी object का prototype reference बताता है।
// __proto__ बताता है कि कोई object किस object से inherit कर रहा है।

// const animal = {
//   eats: true
// };

// const dog = {
//   barks: true
// };

// dog.__proto__ = animal;

// console.log(dog.eats); // true
// मतलब dog object, animal से properties inherit कर रहा है।

// prototype
// prototype एक property होती है जो constructor functions (और classes) के साथ जुड़ी होती है, और यह तय करती है कि उस constructor से बने objects किन properties और methods को inherit करेंगे।

// prototype एक object है जिससे constructor से बने सभी objects methods और properties inherit करते हैं।

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () { // sayhello constructor func hai
//   console.log("Hello " + this.name);
// };

// const user1 = new Person("Dheeraj");
// user1.sayHello();

// isme sayhello person.protoype se inherit hoi rha hai

// question 3:
// what is setPrototypeOf ?
// isme hum kisi other prototype ko kisi susre prototype se replace karte hai

// var animalPrototype = {
//   sound: function () {
//     console.log("Making a sound...");
//   },
// };

// var dog = Object.create(animalPrototype);

// var cat = {
//   purr: function () {
//     console.log("purring");
//   },
// };

// Object.setPrototypeOf(dog, cat);

// question 4:
// what is instanceof ?
// instanceof एक operator होता है जो check करता है कि कोई object किसी constructor function या class का instance है या नहीं।
// function Person(name) {
//   this.name = name;
// }

// const user = new Person("Dheeraj");

// console.log(user instanceof Person); // true

// question 5:
// How can you create an object without a prototype ?
// let obj = Object.create(null);
// console.log(obj);

// question 6:

// function A() {}
// A.prototype.foo = 10;

// function B() {}
// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = B;
// B.prototype.foo = 20;

// function C() {}
// C.prototype = Object.create(B.prototype);
// C.prototype.constructor = C;
// C.prototype.foo = 30;

// var a = new A();
// var b = new B();
// var c = new C();

// console.log(a.foo);
// console.log(b.foo);
// console.log(c.foo);

// question 7:
// DEEP clone in object ?

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
    // copy["address"] = deepClone(user["address"]);
    //   copy["address"] = deepClone({
    //   city: "Kanpur"
    //});
  }

  return copy;
}

const user = {
  name: "Dheeraj",
  address: {
    city: "Kanpur",
  },
};

const clonedUser = deepClone(user);
clonedUser.address.city = "Delhi";
console.log(user.address.city); // main wala change nhi hoga
console.log(clonedUser.address.city); // ye change hoga bas
