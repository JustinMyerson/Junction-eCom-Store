import { calculateVat } from "./utils.js";

// Needs to get the products from local storage

const cartDivHeadings = document.getElementById("cart-headings");
const cartDiv = document.getElementById("cart-container");
const productsInCartDiv = document.getElementById("products-in-cart");
const costsDiv = document.getElementById("costs");
const itemsInCartText = document.getElementById("items-in-cart-heading");
const productListUL = document.createElement("ul");
productListUL.classList.add("product-list-ul");
const costs = document.createElement("div");
costs.classList.add("checkout-price-list");

cartDiv.appendChild(productsInCartDiv);
cartDiv.appendChild(costsDiv);

function renderEmptyCart() {
  itemsInCartText.innerText = "Your cart is empty!";
  itemsInCartText.style.justifyContent = "center";
}

function createClearNowButton() {
  const clearNow = document.createElement("button");
  clearNow.id = "clear-now-button";
  clearNow.innerText = "Clear cart";
  clearNow.style.paddingLeft = "20px";
  clearNow.style.fontSize = "30px";
  clearNow.style.textDecoration = "underline";
  clearNow.style.fontFamily = "Roboto";

  clearNow.addEventListener("click", function () {
    localStorage.clear();
    const itemsInCartText = document.getElementById("items-in-cart-heading");
    itemsInCartText.innerText = "Your cart is empty";
    itemsInCartText.style.justifyContent = "center";
    renderCheckout();
    renderEmptyCart();
  });

  return clearNow;
}

function renderCheckout() {
  if (localStorage.length !== 0) {
    itemsInCartText.innerText = `Your cart has ${localStorage.length} items`;
    itemsInCartText.style.justifyContent = "left";
    cartDivHeadings.appendChild(createClearNowButton());
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      const productListLI = document.createElement("li");
      productListLI.classList.add("product-list-li");
      productListUL.appendChild(productListLI);
    }

    productsInCartDiv.appendChild(productListUL);
  }
}

renderCheckout();
