const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const typeOfSubject = document.querySelector("#subject");
const typeOfSubjectError = document.querySelector("#subjectError");

function checkIfButtonIsDisabled() {
  // if all inputs pass validation enable the button
  if (
    checkLength(firstName.value, 2) &&
    checkLength(lastName.value, 2) &&
    validateEmail(email.value)
  ) {
    button.disabled = false;
  } else {
    // clear the message
    message.innerHTML = "";
    // disable button
    button.disabled = true;
  }
}

// call the same function for each input's keyup event
firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
typeOfSubject.addEventListener("keyup", checkIfButtonIsDisabled);

// function to check if the length of the input value is valid
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

// function for validating email
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  if (checkLength(firstName.value, 2) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
    isValid = false;
  }

  if (checkLength(lastName.value, 2) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
    isValid = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    isValid = false;
  }

  if (checkLength(typeOfSubject.value, 8) === true) {
    typeOfSubjectError.style.display = "none";
  } else {
    typeOfSubjectError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    message.innerHTML =
      '<div class="message">Your message have been sent</div>';
    form.reset();
  }
}

form.addEventListener("submit", validateForm);
