if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready;
}

function ready() {
  for (let i = 0; i < removeCartItemButton.length; i++) {
    let button = removeCartItemButton[i];
    button.addEventListener("click", removeCartItem);
  }
}

let quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

/* kontroller om det faktisk er et nr,(NaN is not a number) || eller mindre en 0 */
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

let removeCartItemButton = document.getElementsByClassName("btn-danger");

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-pricer")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    let price = parseFloat(priceElement.innerText.replace("$", " "));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  /* for at det ska runde av prisene vis det er snakk om øre, feks $20,04453. maksimum blir $20.32*/

  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}

/* visa kort */

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";

    moreText.style.display = "none";
  } else {
    dots.style.display = "none";

    moreText.style.display = "inline";
  }
}

// /* your details */

const form = document.querySelector("#contactForm");

const fname = document.querySelector("#fname");
const fnameError = document.querySelector("#fnameError");

const lname = document.querySelector("#lname");
const lnameError = document.querySelector("#lnameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const postCode = document.querySelector("#postCode");
const postCodeError = document.querySelector("#postCodeError");

const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

// /* payment details */

const cardName = document.querySelector("#cardName");
const cardNameError = document.querySelector("#cardNameError");

const cardNumber = document.querySelector("#cardNumber");
const cartNumberError = document.querySelector("#cartNumberError");

const date = document.querySelector("#date");
const dateError = document.querySelector("#dateError");

const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");

function checkIfButtonIsDisabled() {
  // if all inputs pass validation enable the button
  if (
    checkLength(fname.value, 2) &&
    checkLength(lname.value, 2) &&
    checkLength(lname.value, 2) &&
    validateEmail(email.value) &&
    postCode(lname.value, 2) &&
    city(lname.value, 2)
  ) {
    button.disabled = false;
  } else {
    // clear the message
    message.innerHTML = "";
    // disable button
    button.disabled = true;
  }
}

// // call the same function for each input's keyup event
fname.addEventListener("keyup", checkIfButtonIsDisabled);
lname.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
postCode.addEventListener("keyup", checkIfButtonIsDisabled);
city.addEventListener("keyup", checkIfButtonIsDisabled);
address.addEventListener("keyup", checkIfButtonIsDisabled);

// function to check if the length of the input value is valid
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

// /* function for validating email. your details */
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  if (checkLength(fname.value, 2) === true) {
    firstNameError.style.display = "none";
  } else {
    fNameError.style.display = "block";
    isValid = false;
  }

  if (checkLength(lname.value, 2) === true) {
    lnameError.style.display = "none";
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

  if (checkLength(postCode.value, 3) === true) {
    postCodeError.style.display = "none";
  } else {
    postCodeError.style.display = "block";
    isValid = false;
  }

  if (checkLength(city.value, 3) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
    isValid = false;
  }

  if (checkLength(address.value, 3) === true) {
    addreess.style.display = "none";
  } else {
    cityError.style.display = "block";
    isValid = false;
  }

  /* payment details */

  if (checkLength(cardName.value, 3) === true) {
    cardNameError.style.display = "none";
  } else {
    cityError.style.display = "block";
    isValid = false;
  }

  if (checkLength(cardNumber.value, 3) === true) {
    cartNumberError.style.display = "none";
  } else {
    cityError.style.display = "block";
    isValid = false;
  }

  if (checkLength(date.value, 3) === true) {
    date.style.display = "none";
  } else {
    cityError.style.display = "block";
    isValid = false;
  }

  if (checkLength(cvv.value, 3) === true) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    message.innerHTML =
      '<div class="message">Your message have been sent</div>';
    form.reset();
  }
}

form.addEventListener("Submit", validateForm);

/* modal */

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

//Info about the game
let gameInfo = (document.getElementById("gameInfo").innerHTML =
  "Metroid Dread is the direct sequel to the game Metroid Fusion from 2002, and is the end of a saga that extends over five games. The bounty hunter Samus must go here alone to explore a mysterious. Dread could already be the series' all-time best-seller, according to Gamehub.");
