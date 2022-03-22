let cartCount = 0;

const cartCounter = document.querySelector(".cart-counter");

function addToCart(e) {
  // e.text.includes("Buy")
  if (e.text.toLowerCase().includes("buy")) {
    e.text = "ADDED TO CART";
    e.style.color = "white";
    cartCount++;
    cartCounter.style.display = "block";
  } else {
    e.text = "Buy";
    e.style.color = "#ff984f";
    cartCount--;
    if (cartCount === 0) {
      cartCounter.style.display = "none";
    }
  }

  console.log(cartCounter);
  cartCounter.innerHTML = cartCount;
  console.log(cartCount);
}
