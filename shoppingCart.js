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

function removeFromCart(product) {}

function getCartTotal(product) {}

function clearCart() {
  localStorage.clear();
}

export { addToCart, removeFromCart, getCartTotal, clearCart };
