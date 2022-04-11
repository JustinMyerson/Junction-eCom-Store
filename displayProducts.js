/**
 * Function that displays the product cards for us
 * @param {json} products
 *
 * @example
 * displayProducts(listOfProducts)
 */

import { generateProductCard } from "./generateProductCard.js";

// Need to figure out a trick for row one two three

function displayProducts(products) {
  console.log("test");
  const displayContainer = document.getElementById("display-container");
  displayContainer.textContent = "";
  products.array.forEach((products) => {
    generateProductCard(products);
  });
}

export { displayProducts };
