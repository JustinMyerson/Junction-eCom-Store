import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";
import { generateProductCard } from "./generateProductCard.js";

async function product() {
  const productEndpointURL = window.location.search.slice(-1);
  const url = `${API_URL}product/${productEndpointURL}`;

  const currentProduct = doFetch(url);
  return currentProduct;
}

product();
