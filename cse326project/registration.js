
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    if (name == "" || email == "" || phone == "" || password == "") {

        alert("Please fill all the details");

    }

    else {

        alert("Registration successful");

        window.location.href = "thanks.html";

    }

});
