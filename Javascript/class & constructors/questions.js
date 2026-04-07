// classes and constructors

// class : Class ek template / blueprint hoti hai jisme properties (variables) aur methods (functions) define hote hain.
// object: Object class ka instance hota hai — matlab class se bana hua real usable element.

// what is inheriutence ?
// inherentance work karta with extends keyword
// imse child class apne parent ki properties ko inherit karta hai via super(parent class)

// question 3:

// class Employee {
//     constructor () {
//         this.name = "john"
//     }

//     constructor () {
//         this.age = 30;
//     }
// }

// let employee = new Employee()
// console.log(employee.name)
// ye nhi chlaega kyuki class me ek hi constructor hota hai

// question 4:

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   add(num) {
//     this.result = this.result + num;
//     return this;
//   }

//   substract(num) {
//     this.result = this.result - num;
//     return this;
//   }

//   multiply(num) {
//     this.result = this.result * num;
//     return this;
//   }

//   divide(num) {
//     this.result = this.result / num;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }
// }

// const calc = new Calculator();
// const result = calc.add(10).substract(5).multiply(2).divide(4).getResult();
// console.log(result);

// question 5:
// Inheritence and polymorphism

// class Shape {
//   area() {
//     return 0;
//   }
// }

// class Circle {
//     constructor (radius) {
//         super ();
//         this.radius = radius
//     }

//     area () {
//         return Math.PI * this.radius ** 2
//     }
// }

// class Square {
//     constructor (side) {
//         super ()
//         this.side = side;

//     };

//     area () {
//         return this.side ** 2
//     }
// }

// let circle = new Circle (5)
// let squre = new Square (4)

// console.log(circle.area())
// console.log(squre.area())

// question 6:
// what are getters and setters ?

// getter
// Getter method tab run hota hai jab aap property ko read karte ho.
// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name.toUpperCase();
//   }
// }

// const user1 = new User("dheeraj");
// console.log(user1.name);

// setter
// Setter method tab run hota hai jab aap property ki value change karte ho.
// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// const user1 = new User("dheeraj");
// user1.name = "rahul";

// console.log(user1.name);
