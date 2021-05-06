const form = document.querySelector("#contactForm");
const theName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm (event) {
    event.preventDefault();

    if (theName.value.trim().length > 5) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (subject.value.trim().length > 15) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (message.value.trim().length > 25) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
    
}

form.addEventListener("submit", validateForm);

function submit() {
    if (validateForm.onClick === true)
        console.log("succsesfull input")
} 
       
submit();

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}