/**
 * Function that creates a individual product card by generating the HTML needed
 * and populates it with information from the end point
 * @param {json} product
 * @returns
 */

function generateProductCard(product) {
  console.log(product);
  const listItem = document.createElement("li");
  const productDiv = document.createElement("div");
  const productCard = document.createElement("div");
  const singleProduct = document.createElement("a");
  const productImageAsset = document.createElement("img");
  const productImageDiv = document.createElement("div");
  const productImageText = document.createElement("p");
  const productDetails = document.createElement("div");
  const productName = document.createElement("h2");
  const productDesigner = document.createElement("h3");
  const productDescription = document.createElement("div");
  const pricesAndIcons = document.createElement("div");
  const prices = document.createElement("div");
  const oldPrices = document.createElement("div");
  const currentPrices = document.createElement("div");
  const productCartButton = document.createElement("button");
  const cartButton = document.createElement("img");

  listItem.classList("product-list-item");
  document.appendChild(listItem);
  productDiv.classList("product-div");
  document.appendChild(productDiv);
  productDiv.classList("product-card");
  document.appendChild(productCard);
  singleProduct.href("single-product.html");
  productImageAsset.classList("product-image-asset");
  document.appendChild(productImageAsset);

  return listItem;
}

export { generateProductCard };
