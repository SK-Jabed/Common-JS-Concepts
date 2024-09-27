// Strongly Typed Programming Language
// int a = 5;
// string b = "alim halim khalim";
// bool c = True;
// object student = { name: "noya dhman", id: 55}
// int[] numbers = [12, 45, 78]
// string[] friends = ["abul", "babul"];

// JavaScript is a Dynamic Typed Programming Language

// Primitive Data Types ==> Number, String and Boolean Values
const a = 5;
const b = "Samsu kopai na ekhon ar";
const d = true;

// Non-Primitive Data Types ==> Arrays and Objects
const ages = [45, 65, 48];
const student = { id: 23, class: 7 };

console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);


let p = { job: "Web Developer" };
let q = p;

console.log(p, q);

q = {job: "Back End Web Developer"};
console.log(p, q);

q.job = "Front End Web Developer";
console.log(p, q);



