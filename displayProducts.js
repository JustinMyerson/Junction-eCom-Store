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
  const displayContainer = document.getElementById("display-container");
  products.forEach((products) => {
    console.log(products);
    displayContainer.appendChild(generateProductCard(products));
  });
}

export { displayProducts };
