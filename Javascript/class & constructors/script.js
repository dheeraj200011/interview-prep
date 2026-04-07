// classes and constructors

class Teacher {
  constructor(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this.videolikes = likes;
  }

  intro() {
    return `hey its ${this.name} welcome to my ${this.channel}`;
  }

  like() {
    this.videolikes++;
    return `current likes ${this.videolikes}`;
  }
}

const teacher = new Teacher("dheeraj", "channel");
// console.log(teacher.like());

// converting to function constructor

// function Teacher(name, channel) {
//   this.name = name;
//   this.channel = channel;
// }

// Teacher.prototype.intro = function () {
//   return `hey its ${this.name} welcome to my ${this.channel}`;
// };

// const teacher = new Teacher("dheeraj", "channel");
// console.log(teacher.intro());

// Inheritance

// class NewTeacher extends Teacher {
//   constructor(name, channel, likes, subscribe) {
//     // ye new teacher ka constructor hai
//     super(name, channel, likes);
//     this.subscribe = subscribe;
//   }

//   subscribeCount() {
//     return `hey its ${this.name} welcome to my ${this.channel} with like ${this.likes} and total subscribers ${this.subscribe}`;
//   }
// }

// const newTeacher = new NewTeacher("dheeraj", "channel", 10, 15);
// console.log(newTeacher.subscribeCount());


