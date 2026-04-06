// prototypes in js
// ye bascically kisi other object ke data ko dusre object me show kar sakte hai

// let person = {
//   name: "Dheeraj",
//   age: 31,
// };

// let additional = {
//   name: "dheeraj",
//   alias: function () {
//     console.log(`${this.name} is the name.`);
//   },
// };

// ab mujhe person wale name ko addition ke alis func me show karna hai
// ye prototype chaing hota hai

// person.__proto__ = additional;

// console.log(person.alias());

// prototype inheritence

function Animal(name) {
  this.name = name;
}

// Animal.prototype.sayname = function () {
//   console.log(`name is ${this.name}`);
// };

// let animal = new Animal("lion");
// console.log(animal.sayname());

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Animal.call(this, name);
// → Calls the Animal constructor inside Dog
// → Copies properties from Animal into the current object (this)

Dog.prototype = Object.create(Animal.prototype);
// Dog objects can now access methods from Animal.prototype
// अब Dog.prototype.constructor बदलकर Animal हो जाता है ❌
// क्योंकि object Dog से बना है। to ye line likhni hogi
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("woof");
};

let dog = new Dog("dog", "breed");
console.log(dog.bark());
