alert("Welcome To Farooq Pharmacy");

var username = document.getElementById("username");
var password = document.getElementById("password");

console.log(username);
console.log(password);

function login(e) {
  var usernameVal = username.value;
  var passwordVal = password.value;
  console.log(usernameVal);
  console.log(passwordVal);

  username.value = "";
  password.value = "";
}
