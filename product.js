import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";
import { displayProduct } from "./displayProduct.js";

async function product() {
  const productEndpointURL = window.location.search.slice(-1);
  const url = `${API_URL}product/${productEndpointURL}`;

  return doFetch(url);
}

const currentProduct = await product();

displayProduct(currentProduct);

export { product };
