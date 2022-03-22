const toggleMenu = document.querySelector("#navbar");
let menuItems = document.querySelector("ul");

function toggleHamburgerMenu() {
  if (menuItems.style.display === "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
}
toggleMenu.addEventListener("click", toggleHamburgerMenu);
