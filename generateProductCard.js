import { calculateDiscountPercentage } from "./calculateDiscount.js";
import { addToCart } from "./shoppingCart.js";
import { renderNumberItemsInCart } from "./utils.js";

/**
 * Function that creates a individual product card by generating the HTML needed
 * and populates it with information from the end point
 * @param {json} product
 * @returns
 */

function generateProductCard(product) {
  const ulProducts = document.createElement("ul");
  const listItem = document.createElement("li");
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
  const productDescription = document.createElement("div");
  productDescription.textContent = product.description;
  const pricesAndIcons = document.createElement("div");
  const prices = document.createElement("div");
  const oldPrices = document.createElement("div");
  const currentPrices = document.createElement("div");
  currentPrices.textContent = `R ${product.discounted_price}`;
  const productCartButton = document.createElement("div");
  const cartButton = document.createElement("button");
  const buttonImage = document.createElement("img");
  buttonImage.src = "/assets/add-to-cart.png";

  // Set the discount of the product if prices are not the same
  productImageText.textContent = calculateDiscountPercentage(
    product.price,
    product.discounted_price
  );

  // Create an event listener for the add to cart button
  cartButton.addEventListener("click", () => {
    onAddToCart(product);
  });

  ulProducts.classList.add("product-list");
  listItem.classList.add("product-list-item");
  productDiv.classList.add("product-div");
  productCard.classList.add("product-card");
  productImageAsset.classList.add("product-image-asset");
  productImageDiv.classList.add("product-image");
  productImageText.classList.add("product-image-text");
  productImageText.id = "discount";
  productDetails.classList.add("product-details");
  productName.classList.add("product-name");
  productDescription.classList.add("product-description");
  pricesAndIcons.classList.add("prices-and-icons");
  prices.classList.add("prices");
  oldPrices.classList.add("old-price");
  currentPrices.classList.add("current-price");
  productCartButton.classList.add("product-cart-button");
  cartButton.id = "add-to-cart";
  buttonImage.classList.add("cart-image");

  listItem.appendChild(productDiv);
  productDiv.appendChild(productCard);
  productCard.appendChild(singleProduct);
  singleProduct.appendChild(productImageAsset);
  productCard.appendChild(productImageDiv);
  productImageDiv.appendChild(productImageText);
  productDiv.appendChild(productDetails);
  productDetails.appendChild(productName);
  productDetails.appendChild(productDescription);
  productDetails.appendChild(pricesAndIcons);
  pricesAndIcons.appendChild(prices);
  prices.appendChild(oldPrices);
  prices.appendChild(currentPrices);
  pricesAndIcons.appendChild(productCartButton);
  productCartButton.appendChild(cartButton);
  cartButton.appendChild(buttonImage);

  if (product.price === product.discounted_price) {
    oldPrices.textContent = "blank";
    oldPrices.style.color = "#f1e0e0";
    productImageText.textContent = "";
    productImageDiv.style.backgroundColor = "transparent";
  } else {
    oldPrices.textContent = `R ${product.price}`;
  }

  ulProducts.appendChild(listItem);
  return ulProducts;
}

let currentNumberOfItems = 0;

/**
 * Function to update the number of items in the cart every time
 * that a add to cart button is clicked
 * @param {productObject} product
 * @returns Product ID
 */
function onAddToCart(product) {
  addToCart(product);
  renderNumberItemsInCart();
  return product.id;
}

export { generateProductCard };
