const inputeFirstname = document.getElementById("firstnameInput");
const inputName = document.getElementById("nameInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputValidatePassword = document.getElementById("validatePasswordInput");
const signupButton = document.getElementById("sign-up-button");

inputeFirstname.addEventListener("keyup", validateForm);
inputName.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

function validateForm() {
   const firstnameOK = validateRequired(inputeFirstname);
   const nameOK = validateRequired(inputName);
   const emailOK = validateMail(inputEmail);
   const passwordOK = validatePassword(inputPassword);
   const validatePasswordOK = validateConfirmationPassword(inputPassword, inputValidatePassword);

   if(firstnameOK && nameOK && emailOK && passwordOK && validatePasswordOK) {
      signupButton.disabled = false;
   } else {
      signupButton.disabled = true;
   }
};

function validateMail(input) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const mailUser=inputEmail.value;

   if(mailUser.match(emailRegex)) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      return true;
   } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      return false;
   };
};

function validatePassword(input) {
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
   const passwordUser=inputPassword.value;

   if(passwordUser.match(passwordRegex)) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      return true;
   } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      return false;
   };
};

function validateConfirmationPassword(inputPwd, inputValidatePwd) {
   if(inputPwd.value === inputValidatePwd.value) {
      inputValidatePwd.classList.add("is-valid");
      inputValidatePwd.classList.remove("is-invalid");
      return true;
   } else {
      inputValidatePwd.classList.remove("is-valid");
      inputValidatePwd.classList.add("is-invalid");
      return false;
   };
};

function validateRequired(input) {
   if (input.value != "") {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      return true;
   } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      return false;
   };
};