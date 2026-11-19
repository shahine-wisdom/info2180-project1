/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const email = document.querySelector("#email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        if (email.value.trim() === "") {

            message.textContent = "Please enter a valid email address.";

        } else {

            message.textContent = "Thank you! Your email address <" + email.value + "> has been added to our mailing list!";

        }

    });

});