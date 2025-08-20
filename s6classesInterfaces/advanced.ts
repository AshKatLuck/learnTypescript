// // class User {
// //   constructor(private firstname: string, private lastname: string) {}

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

abstract class Animal {
  constructor(public type: string, public noOflegs: number) {}
  protected greet() {
    console.log(`Hi from animal class greet method`);
  }
}
// const animal1 = new animal("dog", 4); // not ok coz you cannot instantiate an abstract class

class Dog extends Animal {
  constructor(
    public type: string,
    public noOflegs: number,
    public name: string,
    public age: number
  ) {
    super(type, noOflegs);
  }

  public show() {
    console.log(`Animal type:${this.type}`);
    console.log(`No of legs:${this.noOflegs}`);
    console.log(`Name:${this.name}`);
    console.log(`age:${this.age}`);
  }
}
const creature1 = new Dog("dog", 4, "Stevie", 9);
creature1.show();
