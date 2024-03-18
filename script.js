const signUpBtnConnect = document.querySelector(".signUpBtn-connect");
const signInBtnConnect = document.querySelector(".signInBtn-connect");
const form = document.querySelector(".form");

signUpBtnConnect.addEventListener("click", () => {
    form.classList.toggle("active");
});

signInBtnConnect.addEventListener("click", () => {
    form.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.querySelector('input[type="email"]');
    
    emailInput.addEventListener('blur', function() {
        if (!this.validity.valid) {
            this.value = '';
        }
    });
});