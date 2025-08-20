// interface Authenticatable {
//   email: string;
//   password: string;
//   login(): void;
//   logout(): void;
// }
var user1;
user1 = {
    email: "asha@gmail.com",
    password: "karthika",
    login: function () { },
    logout: function () { },
    role: "admin",
};
function flagUser(user) {
    // this makes sure that the argument user defenitely has a login method
    user.login();
}
var AuthenticatedUser = /** @class */ (function () {
    function AuthenticatedUser(email, password) {
        this.email = email;
        this.password = password;
    }
    AuthenticatedUser.prototype.login = function () {
        console.log("inside login implementing login functionality");
    };
    AuthenticatedUser.prototype.logout = function () {
        console.log("inside login implementing logout functionality");
    };
    AuthenticatedUser.prototype.register = function () {
        // this class defenitely can have other variables and methods
        //logic to register
    };
    return AuthenticatedUser;
}());
