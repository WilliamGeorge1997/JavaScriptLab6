function login() {
  // Get input values
  let usernameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;

  // Create login object
  let loginObj = {
    username: usernameInput,
    password: passwordInput,
  };
  
  // Check values
  if (loginObj.username === "admin" && loginObj.password === "123") {
    displayMessage("Welcome!", true);
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  } else {
    displayMessage("Not registered!", false);
  }

}
//Function display message
function displayMessage(message, isSuccess) {
  let resultMessage = document.getElementById("result-message");
  resultMessage.innerHTML = message;
  resultMessage.style.backgroundColor = isSuccess ? "#4caf50" : "#bb2124";
}

