
let bookButton = document.getElementById("book-button");

bookButton.addEventListener("click", function () {

    let application = document.getElementById("application-number").value;
    let date = document.getElementById("appointment-date").value;
    let time = document.getElementById("appointment-time").value;

    if (application == "" || date == "" || time == "") {

        alert("Please fill all the details");

    }

    else {

        alert("Your appointment has been booked successfully");

        window.location.href = "thanks.html";

    }

});
