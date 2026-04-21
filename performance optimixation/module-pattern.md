The Module Pattern in JavaScript is used to encapsulate private variables and functions and expose only what you want publicly. It helps avoid global scope pollution and improves code organization.

👉 In simple terms:
It lets you create private + public members inside one object.

Example:

const AuthModule = (function () {
let isLoggedIn = false;

function login() {
isLoggedIn = true;
console.log("User logged in");
}

function logout() {
isLoggedIn = false;
console.log("User logged out");
}

function status() {
return isLoggedIn;
}

return {
login,
logout,
status,
};
})();

AuthModule.login();
console.log(AuthModule.status()); // true
AuthModule.logout();
