/**
 * Function that accesses an old price HTML element, and converts into an integer to be used when calculating
 * the percentage discount that has been applied
 * @param {Integer} originalPrice - The original price of the product
 * @param {Integer} discountPrice - The discounted price of the product
 * @return {Integer} Rounded percentage discount that has been applied
 *
 * @example
 *
 * calculateDiscountPercentage(100, 90)
 */

function calculateDiscountPercentage(originalPrice, discountPrice) {
  let discount = (100 * (originalPrice - discountPrice)) / originalPrice;
  return Math.round(discount);
}

// Header
// Product

let loadMoreButton = document.getElementById("load-more-button");
let addToCartButtons = document.getElementsByClassName("product-cart-button");
let numberOfItemsInCart = document.getElementById("items-in-cart");
let oldPrice = document.getElementsByClassName("old-price");
let currentPrice = document.getElementsByClassName("current-price");

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", () => {
    console.log("Show more button clicked");
  });
}

let itemsInCart = 0;
Array.from(document.getElementsByClassName("product-cart-button")).forEach(
  function (addToCartButtons) {
    addToCartButtons.addEventListener("click", () => {
      itemsInCart += 1;
      numberOfItemsInCart.innerHTML = itemsInCart.toString();
      console.log("Item added to cart");
    });
  }
);

/**
 * Function that accesses an old price HTML element, and converts into an integer to be used when calculating
 * the percentage discount that has been applied
 * @return {Integer []} Array of old product prices that have not been discounted yet
 */

function getOldPrices() {
  let priceArray = new Array();
  Array.from(document.getElementsByClassName("old-price")).forEach(function (
    oldPrice
  ) {
    let unformattedPrice = oldPrice.innerHTML;
    let formattedPrice = 0;
    formattedPrice = parseInt(
      unformattedPrice.trim().substring(1).replace(/,/g, "").replace(/ /g, "")
    );
    priceArray.push(formattedPrice);
    console.log(formattedPrice);
  });
  return priceArray;
}

/**
 * Function that accesses the current price HTML element, and converts into an integer to be used when calculating
 * the percentage discount that has been applied
 * @return {Integer []} Array of old product prices that have been discounted
 */

function getCurrentPrices() {
  let priceArray = new Array();
  Array.from(document.getElementsByClassName("current-price")).forEach(
    function (currentPrice) {
      let unformattedPrice = currentPrice.innerHTML;
      let formattedPrice = 0;
      formattedPrice = parseInt(
        unformattedPrice.trim().substring(1).replace(/,/g, "").replace(/ /g, "")
      );
      priceArray.push(formattedPrice);
      console.log(formattedPrice);
    }
  );
  return priceArray;
}

const oldPriceArray = getOldPrices();
const currentPriceArray = getCurrentPrices();

/**
 * Function that accesses an old price HTML element, and converts into an integer to be used when calculating
 * the percentage discount that has been applied
 * @param {Integer} oldPriceArray - The original prices of the products
 * @param {Integer} currentPriceArray - The discounted prices of the products
 *
 * @example
 *
 * calculateDiscounts(oldPrices, currentPrices)
 */

function calculateDiscounts(oldPriceArray, currentPriceArray) {
  for (let i = 0; i < 3; i++) {
    console.log(
      `${calculateDiscountPercentage(oldPriceArray[i], currentPriceArray[i])}%`
    );
  }
}

calculateDiscounts(oldPriceArray, currentPriceArray);

// Footer
