/**
 * Function that displays the product cards for us
 * @param {json} products
 *
 * @example
 * displayProducts(listOfProducts)
 */

import { generateProductCard } from "./generateProductCard.js";

function displayProducts(products) {
  const displayContainer = document.getElementById("display-container");
  displayContainer.textContent = "";
  products.array.forEach((element) => {
    generateProductCard(element);
  });
}

export { displayProducts };
