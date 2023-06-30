let form = document.querySelector("form"),
    input = document.querySelectorAll("input"),
    email = document.querySelector("input[type=email]"),
    errorText = document.querySelectorAll("i");
    error = document.querySelectorAll(".container span");

email.placeholder = "Email Address";

for (let i = 0; i < input.length; i++) {
    form.addEventListener("submit", function () {
        if (input[i].checkValidity() === false || input[i].value === '') {
            if (input[i] === email) {
                email.placeholder = "example@example/com";
            }
            input[i].classList.add("not-valid");
            error[i].style.display = "inline";
            errorText[i].style.visibility = 'visible';
            input[i].style.border = "1px solid hsl(0, 100%, 60%)";
        } else {
            console.log("Valid");
            error[i].style.display = "none";
            errorText[i].style.visibility = 'hidden';
            input[i].style.border = "1px solid hsl(246, 25%, 77%)";
            input[i].classList.remove("not-valid");
        }
    });
}
