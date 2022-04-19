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

const clearNow = document.createElement("button");

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
  const div = document.getElementById("cart-headings");
  const costsDiv = document.getElementById("costs");
  const productsInCartDiv = document.getElementById("products-in-cart");
  div.style.justifyContent = "center";
  itemsInCartText.innerText = "Your cart is empty!";
  costsDiv.parentElement.removeChild(costsDiv);
  productsInCartDiv.parentElement.removeChild(productsInCartDiv);
  clearNow.parentElement.removeChild(clearNow);
  renderCheckout();
}

function createClearNowButton() {
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

  if (localStorage.length === 0) {
    renderEmptyCart();
  }

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

      const productListLI = document.createElement("li");
      productListLI.classList.add("product-list-li");
      productListLI.style.border = "1px";
      const productDiv = document.createElement("div");
      productDiv.classList.add("product-div-checkout");
      const productDivLeft = document.createElement("div");
      productDivLeft.classList.add("product-div-checkout-left");
      const productName = document.createElement("h2");
      productName.classList.add("product-name-checkout");
      const productImage = document.createElement("img");
      productImage.classList.add("product-image-checkout");
      productName.innerText = currentProduct.name;
      productImage.src = currentProduct.image;

      const productDivRight = document.createElement("div");
      productDivRight.classList.add("product-div-checkout-right");
      productDivRight.innerText = `R${currentProduct.discounted_price}`;
      const removeButton = document.createElement("a");
      removeButton.classList.add("remove-button-checkout");
      removeButton.innerText = "Remove";

      productDivLeft.append(productImage);
      productDivLeft.append(productName);

      productDivRight.append(removeButton);
      productDiv.appendChild(productDivLeft);
      productDiv.appendChild(productDivRight);
      productListLI.appendChild(productDiv);
      productListUL.appendChild(productListLI);

      subTotal += currentProduct.discounted_price;
    }

    //subtotalAmount = subtotalAmount.toFixed(2);
    subtotalAmount.innerText = `R ${subTotal}`;
    vat = calculateVat(subTotal).toFixed(2);
    vatAmount.innerText = `R ${vat}`;
    total = (parseFloat(vat) + parseFloat(subTotal)).toFixed(2);
    totalAmount.innerText = `R ${total}`;
    productsInCartDiv.appendChild(productListUL);
  }
}

renderCheckout();
