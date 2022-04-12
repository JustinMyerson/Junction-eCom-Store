import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";

async function product() {
  const params = new URLSearchParams(API_URL);
  console.log(params.has("yoco"));

  //console.log(doFetch(`${API_URL}product/${params}`));
}

const currentProduct = product();
console.log(currentProduct);
