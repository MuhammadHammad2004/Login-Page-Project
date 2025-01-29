function comein(e) {
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;

  switch (userEmail && userPassword) {
    case "":
      alert("First Fill The Requored");
      break;
    case "":
      alert("First Fill The Requored");
      break;

    default:
      console.log(userEmail);
      console.log(userPassword);

      alert(`You ` + userEmail + ` are Perfectly Signed In !`);
      break;
  }
  return;
}
