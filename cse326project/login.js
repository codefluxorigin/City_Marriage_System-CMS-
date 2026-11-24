
let loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function () {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please enter your email and password");
    }
    else {
        alert("Login details entered successfully");
    }

});
