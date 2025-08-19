let hobbies = ["cooking", "sewing"];
hobbies.push("singing"); //ok
hobbies.push(666); //not ok

let users: string[]; //specifies users is a array of strings

users = ["amber", "celine"];

users = [112, 113]; //not ok

let users2: (string | number)[]; // array of strings or numbers
users2 = ["asha", 112160];
//alternative way for telling array of strings or numbers or both
let users3: Array<string | number>;
users3 = ["asha luckins", 1120];

//tuples
let result: [number, number]; // create an array with two variables which are numbers

result = [1, 2]; //ok
result = [1, 2, 3]; //not ok

let rank: [string, number];
rank = ["first", 1]; //ok

//objects
let userData = {
  name: "asha",
  age: 39,
};

let userData1: {
  name: string;
  age: number;
};

userData1 = { name: "asha", age: 96 };

let userData3: {
  name: string;
  age: number;
  hobbies: string[];
  married: boolean;
};

userData3 = {
  //not ok coz hobbies and married is not given
  name: "Asha",
  age: 39,
};

//to represent any non null or undefined value

let val: {};
val = "something";
val = true;
val = 100;
val = null; //not ok
val = undefined; //not ok

//flexible object where you know it is an object, but dont know the keys or values
// we can use {}, but they can and cannot be objects

let data: Record<string, string | number>;

data = {
  name: "asha",
  age: 39,
};

data = "asha"; //not ok
data = null; //not ok

//enums

// enum Role {
//   "Admin", // saved as Role.0
//   "User", //saved as Role.1
//   "Guest", //saved as Role.2
// }

// let userRole: Role;
// userRole = Role.Admin; //ok
// userRole = 0;
// userRole = 2;
// userRole = 3; // not ok

//literal types

// let userRole: "Admin" | "User" | "Guest";
// userRole = "Admin"; //ok
// userRole = "Anything"; //not ok

// let possibleOutcomes: [-1 | 1, -1 | 1];
// possibleOutcomes = [-1, 1]; //ok
// possibleOutcomes = [-1, -1]; //ok
// possibleOutcomes = [1, 1]; //ok
// possibleOutcomes = [1, -1]; //ok
// possibleOutcomes = [-1, -1];
// possibleOutcomes = [1, 9]; //not ok

//type aliases or custom types
type Role = "Admin" | "Editor" | "Guest" | "Reviewer"; // this custom type can be resused

let userRole: Role = "Admin";

function designateRole(x: Role) {
  //....
  let user: {
    name: string;
    role: Role;
  };
  user = { name: "asha", role: x };
  return user;
}

let User: {
  name: string;
  age: number;
  role: Role;
};

//function return types

function add(a: number, b: number) {
  return a + b; // return type is inferred by ts as number
}

function subtract(a: number, b: number): number {
  return a - b; //explicitely return type is specified as number
}

//function which doesn't return anyhing

function capitalize(message: string) {
  console.log(message.toUpperCase()); // void return type is inferred by ts
}

function smallize(message: string): void {
  console.log(message.toLowerCase()); //void is specified as return type
}

//never type- used when a function runs but we know
// it will never return to the original place where it was called
//if we dont specify ts assumes the return type as void. never is more specific

function logAndThrow(errorMsg: string): never {
  console.log("error is :", errorMsg);
  throw new Error(errorMsg); // this is going to the next error handler.
  // it wont return to the point of function call ever
}

//Function type
function greet() {
  console.log("hello");
}

function performjob(cb: () => void): boolean {
  // accepts a type of function which takes no paramenters and returns void
  cb();
  return true;
}

performjob(greet);

type User = {
  name: string;
  age: number;
  wish: () => string;
};

let user1: User;
user1 = {
  name: "asha",
  age: 39,
  wish() {
    console.log("hello ");
    return "hello " + this.name;
  },
};
