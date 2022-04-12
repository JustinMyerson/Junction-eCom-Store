import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";
import { generateProductCard } from "./generateProductCard.js";

async function product() {
  const productEndpointURL = window.location.search.slice(-1);
  console.log(`${API_URL}product/${productEndpointURL}`);
  //generateProductCard(product);
  return `${API_URL}product/${productEndpointURL}`;
}

doFetch(product());
