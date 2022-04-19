import { generateProductCard } from "./generateProductCard.js";

/**
 * Function that displays the product cards for us
 * Each row contains three products, and hence every fourth product gets
 * put onto a new row to be displayed
 * At start, three product cards are shown, and a subsequent row is added every time show more is clicked
 * @param {json} products
 *
 * @example
 * displayProducts(listOfProducts)
 */

function displayProducts(products) {
  let row = 1;
  let counter = 0;
  let displayRow = document.getElementById(`row-${row}`);
  let numberOfShowMoreClicked = 0;

  const showMoreButton = document.getElementById("load-more-button");

  for (let i = 0; i < 3; i++) {
    displayRow = document.getElementById(`row-${row}`);
    displayRow.appendChild(generateProductCard(products[i]));
    counter += 1;
  }

  showMoreButton.addEventListener("click", function () {
    if (counter === 3) {
      row += 1;
      for (let i = 3; i < 6; i++) {
        displayRow = document.getElementById(`row-${row}`);
        displayRow.appendChild(generateProductCard(products[i]));
        counter += 1;
      }
    } else if (counter === 6) {
      row += 1;
      for (let i = 6; i < 9; i++) {
        displayRow = document.getElementById(`row-${row}`);
        displayRow.appendChild(generateProductCard(products[i]));
        counter += 1;
      }
    }
  });
}

export { displayProducts };
