//example for classes in TS

// class User {
//   name: string;
//   age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }
//example for classes in vanilla JS

// class User1 {
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

//shortcut in TS for the same class

class User {
  public hobbies: string[] = ["swimming", "karate"];
  private address: string = "2106 N greenwood dr";
  public readonly userid = "KHJI";
  public readonly qualifications = ["js", "ts"];
  constructor(public name: string, public age: number) {}
}

const user1 = new User("Asha", 39);
const user2 = new User("Jessica", 96);
console.log(user1.address); //not ok coz private
console.log(user1.hobbies);
user1.userid = "OOUIO"; //not ok
console.log(user1.userid); //reading ok
user1.qualifications = ["nothing"];
user1.qualifications.push("c++"); // can push coz we are not changing the refernce
