const userName = "Asha";
console.log(typeof userName);
type UserName = typeof userName;

//useful feature of typeof

let settings = {
  difficulty: "easy",
  level: 10,
  players: ["jane", "patrick"],
  didStart: false,
};

type Settings = typeof settings;

function startGame(s: Settings) {
  //.....
}

//keyof
type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;
validKey = "age";
validKey = "name";

//practical use of keyof
function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  let val = obj[key];
  if (val == null || val == undefined) {
    throw new Error("value is null or undefined");
  }
  return val;
}
const person = {
  name: "asha",
  age: 39,
  goal: 100,
};

type Person = typeof person;

type Keys = keyof Person;

console.log(getProp(person, "age"));
