// question 1: return only name of students in capital.

// let students = [
//   { name: "Piyush", rollnumber: 31, marks: 80 },
//   { name: "Jenny", rollnumber: 15, marks: 69 },
//   { name: "Kaushal", rollnumber: 16, marks: 35 },
//   { name: "Dilpreet", rollnumber: 7, marks: 55 },
// ];

// const capitalNames = students.map((item) => item.name.toUpperCase());
// console.log(capitalNames);

// Question 2: return only details of those who scored more than 60 marks

// let students = [
//   { name: "Piyush", rollnumber: 31, marks: 80 },
//   { name: "Jenny", rollnumber: 15, marks: 69 },
//   { name: "Kaushal", rollnumber: 16, marks: 35 },
//   { name: "Dilpreet", rollnumber: 7, marks: 55 },
// ];

// let stuDetails = students.filter((item) => item.marks > 60);
// console.log(stuDetails);

// QUESTION 3: more than 60 marks and rollnumber greater than 15

// let students = [
//   { name: "Piyush", rollnumber: 31, marks: 80 },
//   { name: "Jenny", rollnumber: 15, marks: 69 },
//   { name: "Kaushal", rollnumber: 16, marks: 35 },
//   { name: "Dilpreet", rollnumber: 7, marks: 55 },
// ];

// let details = students.filter(
//   (item) => item.marks > 60 && item.rollnumber > 15,
// );
// console.log(details);

// question 4: sum of marks of all students

// let students = [
//   { name: "Piyush", rollnumber: 31, marks: 80 },
//   { name: "Jenny", rollnumber: 15, marks: 69 },
//   { name: "Kaushal", rollnumber: 16, marks: 35 },
//   { name: "Dilpreet", rollnumber: 7, marks: 55 },
// ];

// let sum = students
//   .map((item) => item.marks)
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(sum);

// question 5: return only names of students who scored more than 60

// let students = [
//   { name: "Piyush", rollnumber: 31, marks: 80 },
//   { name: "Jenny", rollnumber: 15, marks: 69 },
//   { name: "Kaushal", rollnumber: 16, marks: 35 },
//   { name: "Dilpreet", rollnumber: 7, marks: 55 },
// ];

// let names = students
//   .filter((item) => item.marks > 60)
//   .map((item) => item.name.toUpperCase());
// console.log(names);
