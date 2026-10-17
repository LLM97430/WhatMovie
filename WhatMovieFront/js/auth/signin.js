const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const signinButton = document.getElementById("btn-signin");

emailInput.addEventListener("keyup", validateForm);

signinButton.addEventListener("click", checkCredentials);

function checkCredentials(){
//Ici il faudra appeler une API pour vérifier les crédentials en BDD

   if(emailInput.value == "test@mail.com" && passwordInput.value == "Gouder35900@") {
      alert("You're signed in");

      //Il faudra récupérer le vrai Token
      const token = "vfiuzvanaomnkmjqbvqkfdbviupraevbraovaoubaiv";

      //Placer ce token en cookie
      setToken(token);

      setCookie(roleCookieName, "admin", 7);

      window.location.replace("/");
   } else {
      emailInput.classList.add("is-invalid");
      passwordInput.classList.add("is-invalid");
      alert("The e-mail address and password do not match");
   }
};

function validateMail(input) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const mailUser=emailInput.value;

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

function validateForm() {
   const emailOK = validateMail(emailInput);

   if(emailOK) {
      signinButton.disabled = false;
   } else {
      signinButton.disabled = true;
   }
};
