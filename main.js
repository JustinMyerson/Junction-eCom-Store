import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";
import { displayProducts } from "./displayProducts.js";

/**
 * Main function that fetches the products to be rendered from the endpoint
 * and calls method to display them
 */

async function main() {
  const products = await doFetch(API_URL);
  displayProducts(products);
}

main();

// Footer
