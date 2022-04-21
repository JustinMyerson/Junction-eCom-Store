import { renderNumberItemsInCart } from "./utils.js";

/**
 * Checks whether there are products already in local storage
 * If not, creates a new array of products to be stored
 * If yes, fetches the array of products from local storage, adds the selected product and returns the array to local storage
 * @param {json} product - Product that is being added to the cart
 */
function addToCart(product) {
  let productArray = [];
  if (localStorage.length === 0) {
    productArray.push(product);
    localStorage.setItem("Products", JSON.stringify(productArray));
  } else {
    productArray = JSON.parse(localStorage.getItem("Products"));
    productArray.push(product);
    localStorage.setItem("Products", JSON.stringify(productArray));
  }
}

/**
 * Fetches the product array from local storage, and removes the product
 * @param {json} product - Product that is being removed from the cart
 */

function removeFromCart(product) {
  let productArray = JSON.parse(localStorage.getItem("Products"));
  for (let i = 0; i < productArray.length; i++) {
    if (product.id === productArray[i].id) {
      productArray.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("Products", JSON.stringify(productArray));
}

function getCartTotal(product) {}

/**
 * Clears the local storage which contains the products that have been added to the cart
 */
function clearCart() {
  localStorage.clear();
  renderNumberItemsInCart();
}

export { addToCart, removeFromCart, getCartTotal, clearCart };
