const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const form = document.querySelector("#contactForm");

const button = document.querySelector("button");

function validateInput(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 3) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 5) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (checkLength(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 8) === true) {
    subjectError.error.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
}

form.addEventListener("submit", validateInput);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
