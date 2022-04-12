import { generateSingleProductCard } from "./generateSingleProductCard.js";
import { product } from "./product.js";

/**
 * Function that displays the product cards for us
 * Each row contains three products, and hence every fourth product gets
 * put onto a new row to be displayed
 * @param {json} product
 *
 * @example
 * displayProducts(singleProduct)
 */

function displayProduct(singleProduct) {
  let mainDiv = document.getElementById("main");
  mainDiv.appendChild(generateSingleProductCard(singleProduct));
}

export { displayProduct };
