// all of these are same
const hobbies1 = ["knitting", "baking"];
const hobbies2: string[] = ["knitting", "baking"];
const hobbies3: Array<string> = ["knitting", "baking"]; //generic

//custom generic type
type DataStore<T> = {
  // you can use any variable name instead of T
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.url = "jHJHJHH";
store.isAvailable = true;

//generic functions
// function merge<T>(a: T, b: T) {
//   return [a, b];
// }

// console.log(merge<number>(1, 3));

// console.log(merge("asha", "luckins"));

//generic functions
// function merge<T, U>(a: T, b: U) {
//   return [a, b];
// }

// console.log(merge<number, string>(1, "Asha"));

// console.log(merge(1, "luckins"));

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}
mergeObj({ name: "Asha", age: 39 }, { gender: "female" });

//generic class
class User<T> {
  constructor(public id: T) {}
}
//generic interface
interface table<T> {
  id: T;
}
