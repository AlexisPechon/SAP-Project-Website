// *Author: Alexis Pechon
// *Student Number: x19358953
// *Student Email: x19358953@student.ncirl.ie
// *File: function.js
// *Date: 23/03/2023
//
// *@reference: https://youtu.be/3GsKEtBcGTk

//The JavaScript file controls the main functionalities of the login form and the
//website as a whole. There are two variants of the JavaScript file, both of which
//could be found on the secure and insecure branches on GitHub

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formMessage");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "formMessageError");
    messageElement.classList.add(`formMessage${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("formInputError");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("formInputError");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formHidden");
        createAccountForm.classList.remove("formHidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        createAccountForm.classList.add("formHidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".formInput").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});