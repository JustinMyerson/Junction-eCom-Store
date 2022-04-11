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
  let row = 1;
  let counter = 0;
  let displayRow = document.getElementById(`row-${row}`);

  products.forEach((products) => {
    if (counter === 3 || counter === 6 || counter === 9) {
      row += 1;
      displayRow = document.getElementById(`row-${row}`);
    }
    displayRow.appendChild(generateProductCard(products));
    counter += 1;
  });
}

export { displayProducts };
