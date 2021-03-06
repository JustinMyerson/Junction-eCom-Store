import { addToCart } from "./shoppingCart.js";
import { renderNumberItemsInCart } from "./utils.js";

/**
 * Function that creates a individual product card by generating the HTML needed
 * and populates it with information from the end point
 * @param {json} product
 * @returns
 */

function generateSingleProductCard(product) {
  const mainDiv = document.getElementById("display-container");
  const productDiv = document.createElement("div");
  const productCard = document.createElement("div");
  const singleProduct = document.createElement("a");
  singleProduct.setAttribute("href", `/product.html?id=${product.id}`);
  const productImageAsset = document.createElement("img");
  productImageAsset.src = product.image;
  const productImageDiv = document.createElement("div");
  const productImageText = document.createElement("p");
  const productDetails = document.createElement("div");
  const productName = document.createElement("h2");
  productName.textContent = product.name;
  const productDesigner = document.createElement("h3");
  productDesigner.textContent = "By ";
  const strongDesigner = document.createElement("strong");
  strongDesigner.innerText = product.company;
  const productDescription = document.createElement("div");
  productDescription.textContent = product.description;
  const pricesAndIcons = document.createElement("div");
  const prices = document.createElement("div");
  const oldPrices = document.createElement("div");
  const currentPrices = document.createElement("div");
  currentPrices.textContent = `R${product.discounted_price}`;
  const productCartButtonDiv = document.createElement("div");
  const productCartButton = document.createElement("button");

  // Create an event listener for the add to cart button
  productCartButton.addEventListener("click", () => {
    onAddToCart(product);
  });

  productDiv.classList.add("product-div");
  productCard.classList.add("product-card");
  productImageAsset.classList.add("product-image-asset");
  productImageDiv.classList.add("product-image");
  productImageText.classList.add("product-image-text");
  productImageText.id = "discount";
  productDetails.classList.add("product-details");
  productName.classList.add("product-name");
  productDesigner.classList.add("product-designer");
  strongDesigner.classList.add("strong-designer");
  productDescription.classList.add("product-description");
  pricesAndIcons.classList.add("prices-and-icons");
  prices.classList.add("prices");
  oldPrices.classList.add("old-price");
  currentPrices.classList.add("current-price");
  productCartButtonDiv.classList.add("buy-now-button-div");
  productCartButton.classList.add("buy-now-button");
  productCartButton.textContent = "ADD TO CART";

  productDiv.appendChild(productCard);
  productCard.appendChild(singleProduct);
  singleProduct.appendChild(productImageAsset);
  productDetails.appendChild(productName);
  productDetails.appendChild(productDesigner);
  productDiv.appendChild(productDetails);
  productDesigner.appendChild(strongDesigner);
  productDetails.appendChild(productDescription);
  productDetails.appendChild(pricesAndIcons);
  pricesAndIcons.appendChild(prices);
  prices.appendChild(oldPrices);
  prices.appendChild(currentPrices);
  productCartButtonDiv.appendChild(productCartButton);
  pricesAndIcons.appendChild(productCartButton);
  productDiv.appendChild(productDetails);

  if (product.price === product.discounted_price) {
    oldPrices.textContent = "blank";
    oldPrices.style.color = "white";
    productImageText.textContent = "";
    productImageDiv.style.backgroundColor = "transparent";
  } else {
    oldPrices.textContent = `R${product.price}`;
  }

  mainDiv.appendChild(productDiv);
  return mainDiv;
}

let currentNumberOfItems = 0;

/**
 * Function to update the number of items in the cart every time
 * that a add to cart button is clicked
 * @param {productObject} product
 * @returns Product ID
 */
function onAddToCart(product) {
  const numberOfItemsInCart = document.getElementById("items-in-cart-text");
  currentNumberOfItems += 1;
  numberOfItemsInCart.textContent = currentNumberOfItems;
  addToCart(product);
  renderNumberItemsInCart();
  return product.id;
}

renderNumberItemsInCart();

export { generateSingleProductCard };
