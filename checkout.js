import { calculateVat } from "./utils.js";

// Needs to get the products from local storage

const cartDivHeadings = document.getElementById("cart-headings");
const cartDiv = document.getElementById("cart-container");
const productsInCartDiv = document.getElementById("products-in-cart");
const costsDiv = document.getElementById("costs");
const itemsInCartText = document.getElementById("items-in-cart-heading");
const productListUL = document.createElement("ul");
productListUL.style.listStyle = "none";
productListUL.classList.add("product-list-ul");
const costs = document.createElement("div");
costs.classList.add("checkout-price-list");

const subtotalText = document.getElementById("subtotal-text");
const vatText = document.getElementById("vat-text");
const totalText = document.getElementById("total-text");
totalText.style.fontWeight = 700;
totalText.style.fontSize = "45px";

const subtotalAmount = document.getElementById("subtotal-amount");
const vatAmount = document.getElementById("vat-amount");
const totalAmount = document.getElementById("total-amount");
totalAmount.style.fontWeight = 700;
totalAmount.style.fontSize = "45px";

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
  let subTotal = 0;
  let vat = 0;
  let total = 0;

  if (localStorage.length !== 0) {
    itemsInCartText.innerText = `Your cart has ${localStorage.length} items`;
    itemsInCartText.style.justifyContent = "left";
    cartDivHeadings.appendChild(createClearNowButton());

    subtotalText.innerText = "Sub-total:";
    vatText.innerText = "VAT:";
    totalText.innerText = "Total";

    for (let i = 0; i < localStorage.length; i++) {
      const currentProduct = JSON.parse(
        localStorage.getItem(localStorage.key(i))
      );
      subTotal += currentProduct.discounted_price;
      const productListLI = document.createElement("li");
      productListLI.classList.add("product-list-li");
      productListLI.innerText = currentProduct.name;
      productListLI.style.border = "1px";
      productListUL.appendChild(productListLI);
    }

    subtotalAmount.innerText = `R ${subTotal}`;
    vat = calculateVat(subTotal).toFixed(2);
    vatAmount.innerText = `R ${vat}`;
    total = parseFloat(vat) + parseFloat(subTotal);
    totalAmount.innerText = `R ${total}`;
    productsInCartDiv.appendChild(productListUL);
  }
}

renderCheckout();
