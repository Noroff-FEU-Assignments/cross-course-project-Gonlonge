// const toggleMenu = document.querySelector("#navbar");
// let menuItems = document.querySelector("ul");

// function toggleHamburgerMenu() {
//   if (menuItems.style.display === "none") {
//     menuItems.style.display = "block";
//   } else {
//     menuItems.style.display = "none";
//   }
// }
// toggleMenu.addEventListener("click", toggleHamburgerMenu);

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
