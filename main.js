import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";
import { displayProducts } from "./displayProducts.js";

async function main() {
  const products = await doFetch(API_URL);
  displayProducts(products);
}

main();

// Header
// Product

async function getSingleProduct() {
  const response = await fetch(
    "https://yoco-students-api-server.herokuapp.com/v1/junction/product/1"
  );
  const data = await response.json();
}

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
  });
  return priceArray;
}

function getOldPrice(unformattedOldPrice) {
  console.log(unformattedOldPrice);
  let unformattedPrice = unformattedOldPrice;
  return formattedPrice;
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
    }
  );
  return priceArray;
}

const oldPriceArray = getOldPrices();
const currentPriceArray = getCurrentPrices();

/**
 * Function that takes in an array of old and new prices, and returns an array of discounts applied to each product in the array
 * @param {Integer} oldPriceArray - The original prices of the products
 * @param {Integer} currentPriceArray - The discounted prices of the products
 *
 * @example
 *
 * calculateDiscounts(oldPrices, currentPrices)
 */

function calculateDiscounts(oldPriceArray, currentPriceArray) {
  let discounts = [];
  for (let i = 0; i < 3; i++) {
    discounts.push(
      `${calculateDiscountPercentage(oldPriceArray[i], currentPriceArray[i])}%`
    );
  }
  return discounts;
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

// Footer
