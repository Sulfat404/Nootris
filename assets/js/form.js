"use strict"

const form = document.querySelector(".form");
form.addEventListener("submit", formSend);

// Запрещение стандартной отправки формы
async function formSend(elem) {
    elem.preventDefault();
    formValidate(form);
}

function formValidate(form) {
    let formReq = document.querySelectorAll("._required");
    const errorEmpty = document.querySelectorAll(".error_empty");
    const emailValidError = document.querySelector(".email__error_not_valid");
    const passwordErrorLenght = document.querySelector(".password_error_lenght");
    textRemoveError(emailValidError);
    textRemoveError(passwordErrorLenght);
    let amoutOfError = 0;

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        const itemErrorEmpty = errorEmpty[index];
        formRemoveError(input);
        textRemoveError(itemErrorEmpty);

        if (input.value === "") {
            formAddError(input);
            textAddError(itemErrorEmpty);
            amoutOfError++;
        } else if (input.classList.contains("email__input")) {
            if (validateEmail(input)) {
                formAddError(input);
                textAddError(emailValidError);
                amoutOfError++;
            }
        } else if (input.classList.contains("password__input")) {
            if (input.value.length < 8) {
                textAddError(passwordErrorLenght);
                formAddError(input);
                amoutOfError++;
            }
        } else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
            formAddError(input);
            textAddError(itemErrorEmpty);
            amoutOfError++;
        } 
    }
    if (amoutOfError === 0) {
        let result = {
            email: formReq[0].value,
            password: formReq[1].value,
        };
        console.log(result);
    }
}

function formAddError(input) {
    input.parentElement.previousElementSibling.classList.add("_error"); 
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
}
function formRemoveError(input) {
    input.parentElement.previousElementSibling.classList.remove("_error");
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
}

function textAddError(error) {
    error.classList.add("text_error");
}

function textRemoveError(error) {
    error.classList.remove("text_error");
}

// Validation of email
function validateEmail(input) {
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !(re.test(String(input.value).toLowerCase()));
}