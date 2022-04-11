/**
 * Function that creates a individual product card by generating the HTML needed
 * and populates it with information from the end point
 * @param {json} product
 * @returns
 */

function generateProductCard(product) {
  console.log(product);
  const div = document.createElement("div");
  div.textContent = "Hello world";
  return div;
}
export { generateProductCard };
