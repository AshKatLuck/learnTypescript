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
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User("Asha", 39);
var user2 = new User("Jessica", 96);
