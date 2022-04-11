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

  listItem.classList.add("product-list-item");
  productDiv.classList.add("product-div");
  productCard.classList.add("product-card");
  singleProduct.href = "single-product.html";
  productImageAsset.classList.add("product-image-asset");
  productImageDiv.classList.add("product-image");
  productImageText.classList.add("product-image-text");
  productImageText.id = "discount";
  productDetails.classList.add("product-details");
  productName.classList.add("product-name");
  productDesigner.classList.add("product-designer");
  strongDesigner.classList.add("strong-designer");
  productDescription.classList.add("product-description");
  pricesAndIcons.classList.add("prices-and-icons");
  prices.classList.add("prices");
  oldPrices.classList.add("old-price");
  currentPrices.classList.add("current-price");
  productCartButton.classList.add("product-cart-button");
  cartButton.id = "add-to-cart";
  buttonImage.classList.add("cart-image");

  productDiv.appendChild(productCard);
  productCard.appendChild(singleProduct);
  singleProduct.appendChild(productImageAsset);
  productCard.appendChild(productImageDiv);
  productImageDiv.appendChild(productImageText);
  productDiv.appendChild(productDetails);
  productDetails.appendChild(productName);
  productDetails.appendChild(productDesigner);
  productDesigner.appendChild(strongDesigner);
  productDetails.appendChild(productDescription);
  productDetails.appendChild(pricesAndIcons);
  pricesAndIcons.appendChild(prices);
  prices.appendChild(oldPrices);
  prices.appendChild(currentPrices);
  pricesAndIcons.appendChild(productCartButton);
  productCartButton.appendChild(cartButton);
  cartButton.appendChild(buttonImage);

  listItem.appendChild(productDiv);
  return listItem;
}

export { generateProductCard };
