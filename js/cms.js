const url = "https://drglutes.no/gamehub/wp-json/wc/store/products";
const productUrl = "https://drglutes.no/gamehub/wp-json/wc/store/products/";
const productContainer = document.querySelector(".products-list");

async function getProduct(productId) {
  try {
    const response = await fetch(productUrl + productId);
    const game = await response.json();

    const cartPrice = document.querySelector(".cart-price");
    const description = document.querySelector(".game-description");
    const img = document.querySelector(".game-image");

    console.log(game);
    console.log(game.images[0].src);
    console.log(game.name);
    console.log(game.prices.price);
    console.log(game.prices.currency_code);
    console.log(game.description);

    cartPrice.innerHTML = `${game.name} ${game.prices.currency_code} ${game.prices.price} `;
    description.innerHTML = `${game.description}`;
    img.innerHTML = `<img src="${game.images[0].src}"/>`;
  } catch (error) {}
}

/* */

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log(getResults);

    getResults.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    getResults.forEach((game) => {
      productContainer.innerHTML += `<a href="buy.html?id=${game.id}">
      <div class="products">
      <div class="product-img">
      <div class="color-js">
      <img src="${game.images[0].src}">
      <h3>${game.name} ${game.prices.price} ${game.prices.currency_code}</h3>
      </div>
      </div>
      </div>
      </a>`;
    });
  } catch (error) {
    console.log(error);
  }
}

let myVar = 5;

console.log(myVar);
