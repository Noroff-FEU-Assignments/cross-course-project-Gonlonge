let cartCount = 0;

let cartCounters = document.getElementsByClassName("cart-counter");
console.log(cartCounters);

function addToCart(e) {
  addOneToCart = false;

  if (e.text.toLowerCase().includes("buy")) {
    e.text = "ADDED TO CART";
    e.style.color = "white";
    cartCount++;
  } else {
    e.text = "Buy";
    e.style.color = "#ff984f";
    cartCount--;
  }

  for (const [key, cartCounter] of Object.entries(cartCounters)) {
    if (cartCount === 0) {
      cartCounter.style.display = "none";
    }

    if (e.text.toUpperCase().includes("ADDED TO CART")) {
      cartCounter.style.display = "block";
    }

    cartCounter.innerHTML = cartCount;
  }
}
