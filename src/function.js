// *Author: Alexis Pechon
// *Student Number: x19358953
// *Student Email: x19358953@student.ncirl.ie
// *File: function.js
// *Date: 23/03/2023
//
// *@reference: https://youtu.be/3GsKEtBcGTk

//NOTE: The following JavaScript file has the: Insecure Design and the Broken Access Control
//vulnerability implemented which will be highlighted in the code.
//However, the project also focuses on the XSS, SSRF and Insecure Design vulnerability,
//but the issue of the two could be solved by ussing a HTTPS connection
//as opposed to a HTTP connection, which makes it less likely to be subjected
//to an XSS and SSRF attack.
//A link to a secure website will be provided.

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formMessage");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "formMessageError");
    messageElement.classList.add(`formMessage${type}`);
}

//Comparing to the secure version of the website on GitHub, in the insecure version
//there is a lack of input validation, meaning that there are no prompts or warnings
//that a user may have typed in or used an invalid input, making it easy for anyone
//to bypass the login system. 

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

    //When comparing the code from the insecure branch and secure branch
    //on GitHub, this version of the code lacks the secure feature of checking
    //whether or not the user has input a valid username, email or password, making it
    //easy for cybercriminals to bypass and input invalid credentials.
    //This in turns highlights the "Broken Access Control" vulnerability

}); //End of DOM event listener