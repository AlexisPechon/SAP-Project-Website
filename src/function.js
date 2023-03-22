function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formMessage");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "formMessageError");
    messageElement.classList.add(`formMessage${type}`);
}

function setInputError(inputElement, message) {
    //The purpose of this function is to display an error message when an input element from the website
    //is either empty or has an invalid data put in

    //This is considered as a secure approach to the "Broken Access Control Vulnerability" as it limits to user's ability to
    //enter an empty field or an invalid input
    
    inputElement.classList.add("formInputError");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("formInputError");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => { //Start of DOM Event listener
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        //The following function will control when the login form and the createAccountForm should be displayed to the user
        //depending on whether or not the user has select the #linkCreateAccount on the login form
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
}); //End of DOM event listener