// Code goes here!

//arrow function
// const add = (a: number, b: number = 1) => {
//   // default value should be the last parameters
//   return a + b;
// };

// console.log(add(6, 10));
// console.log(add(6));

//spread operator on arrays
// const hobbies = ["singing", "dancing"];
// const ashaHobbies = ["exercising"];

// // ashaHobbies.push(hobbies); // not ok

// ashaHobbies.push(...hobbies); //ok
// console.log(ashaHobbies);

//spread operator on objects
// let user = {
//   name: "asha",
//   age: 39,
// };

// const user2 = user;
// user2.name = "nisha";
// console.log(user);

// const user3 = { ...user };
// user3.name = "cooli";
// console.log(user);

//rest parameters
// i want to add a list of numbers separated by comma.
//i dont know how many numbers would be there

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(add(1, 8, 50.6, 2, 96));

//if we know 3 parameter are there
const add1 = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(add1(1, 2, 3));

//Array destructuring
const hobbies = ["karate", "swimming", "knitting", "cricket"];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies);

//object destructuring

let user = {
  usrname: "asha",
  age: 39,
};

const { usrname, age } = user;
console.log(usrname, age);

const { usrname: firstname, age: age1 } = user; // this is type def, it is alias.. copy usrname as firstname
console.log(firstname, age1);
