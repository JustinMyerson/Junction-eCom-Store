/**
 * Function that creates a individual product card by generating the HTML needed
 * and populates it with information from the end point
 * @param {json} product
 * @returns
 */

function generateProductCard(product) {
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
  const strongDesigner = document.createElement("strong");
  const productDescription = document.createElement("div");
  const pricesAndIcons = document.createElement("div");
  const prices = document.createElement("div");
  const oldPrices = document.createElement("div");
  const currentPrices = document.createElement("div");
  const productCartButton = document.createElement("div");
  const cartButton = document.createElement("button");
  const buttonImage = document.createElement("img");

  listItem.classList("product-list-item");
  productDiv.classList("product-div");
  productDiv.classList("product-card");
  singleProduct.href("single-product.html");
  productImageAsset.classList("product-image-asset");
  productImageDiv.classList("product-image");
  productImageText.classList("product-image-text");
  productImageText.id("discount");
  productDetails.classList("product-details");
  productName.classList("product-name");
  productDesigner.classList("product-designer");
  strongDesigner.classList("strong-designer");
  productDescription.classList("product-description");
  pricesAndIcons.classList("prices-and-icons");
  prices.classList("prices");
  oldPrices.classList("old-price");
  currentPrices.classList("current-price");
  productCartButton.classList("product-cart-button");
  cartButton.id("add-to-cart");
  buttonImage.classList("cart-image");

  document.appendChild(listItem);
  document.appendChild(productDiv);
  document.appendChild(productCard);
  document.appendChild(productImageAsset);
  document.appendChild(productImageDiv);
  document.appendChild(productImageText);
  document.appendChild(productName);
  document.appendChild(productDesigner);
  document.appendChild(strongDesigner);
  document.appendChild(productDescription);
  document.appendChild(pricesAndIcons);
  document.appendChild(prices);
  document.appendChild(oldPrices);
  document.appendChild(currentPrices);
  document.appendChild(productCartButton);
  document.appendChild(cartButton);
  document.appendChild(buttonImage);

  return listItem;
}

export { generateProductCard };
