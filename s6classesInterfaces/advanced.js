// // class User {
// //   constructor(private firstname: string, private lastname: string) {}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// //   get fullname() {
// //     return `${this.firstname} ${this.lastname}`;
// //   }
// // }
// // const user1 = new User("asha", "luckins");
// // console.log(user1.fullname); // ok.. note that no () is there which calling fullname
// // console.log(user1.firstname); //not ok coz private
// class User {
//   protected _firstname: string = "";
//   protected _lastname: string = "";
//   set firstname(name: string) {
//     if (name == "") {
//       throw new Error("name is invalid");
//     }
//     this._firstname = name;
//   }
//   set lastname(name: string) {
//     if (name == "") {
//       throw new Error("name is invalid");
//     }
//     this._lastname = name;
//   }
//   get fullname() {
//     return `${this._firstname} ${this._lastname}`;
//   }
//   static greet() {
//     console.log("HEY i am static method");
//   }
// }
// User.greet(); // ok
// const user1 = new User();
// // user1.greet();//not ok coz user1 is an instance
// user1.firstname = "asha";
// user1.lastname = "luckins";
// console.log(user1.fullname);
// class Employee extends User {
//   constructor(public workTitle: string) {
//     super();
//     this._firstname = "John";
//     this._lastname = "Smith";
//   }
//   work() {
//     console.log("working here");
//   }
// }
// const emp1 = new Employee("clerk");
// console.log(emp1.fullname, emp1.workTitle);
// emp1.work();
//abstract class
var Animal = /** @class */ (function () {
    function Animal(type, noOflegs) {
        this.type = type;
        this.noOflegs = noOflegs;
    }
    Animal.prototype.greet = function () {
        console.log("Hi from animal class greet method");
    };
    return Animal;
}());
// const animal1 = new animal("dog", 4); // not ok coz you cannot instantiate an abstract class
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(type, noOflegs, name, age) {
        var _this = _super.call(this, type, noOflegs) || this;
        _this.type = type;
        _this.noOflegs = noOflegs;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Dog.prototype.show = function () {
        console.log("Animal type:".concat(this.type));
        console.log("No of legs:".concat(this.noOflegs));
        console.log("Name:".concat(this.name));
        console.log("age:".concat(this.age));
    };
    return Dog;
}(Animal));
var creature1 = new Dog("dog", 4, "Stevie", 9);
creature1.show();
