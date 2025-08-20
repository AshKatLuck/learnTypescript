// interface Authenticatable {
//   email: string;
//   password: string;
//   login(): void;
//   logout(): void;
// }

// let User: Authenticatable;

// User = {
//   email: "asha@gmail.com",
//   password: "karthika",
//   username: "asha",
//   login() {
//     //reach out to db, validate email and password
//     //create session
//   },
//   logout() {
//     //clear the session
//   },
//   register() {
//     //logic to register
//   },
// };

// interface Authenticatable {
//   username: string;
//   register(): void;
// }

// type Authenticable1 = {
//   email: string;
//   password: string;
//   login(): void;
//   logout(): void;
// };

// const User2:Authenticable1={
//     email:"asha@gmail.com",
//     password:"karthika",
//     login(){
//         //logc for login
//     },
//     logout(){
//         //logic for logout
//     }
// }

// type Authenticable1={
//     username:string,
//     register():void,
// }

interface Authenticatable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}

let user1: AuthenticatableAdmin;

user1 = {
  email: "asha@gmail.com",
  password: "karthika",
  login() {},
  logout() {},
  role: "admin",
};

function flagUser(user: Authenticatable) {
  // this makes sure that the argument user defenitely has a login method
  user.login();
}

class AuthenticatedUser implements Authenticatable {
  constructor(public email: string, public password: string) {}
  login() {
    console.log("inside login implementing login functionality");
  }
  logout() {
    console.log("inside login implementing logout functionality");
  }
  register() {
    // this class defenitely can have other variables and methods
    //logic to register
  }
}
