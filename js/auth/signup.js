const inputeFirstname = document.getElementById("firstnameInput");
const inputName = document.getElementById("nameInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputValidatePassword = document.getElementById("validatePasswordInput");

inputeFirstname.addEventListener("keyup", validateForm);
inputName.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

function validateForm() {
   validateRequired(inputeFirstname);
   validateRequired(inputName);
}

function validateRequired(input) {
   if (input.value != "") {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
   } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
   };
};