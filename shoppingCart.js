function addToCart(product) {
  if (localStorage.getItem(cart) === null) {
    const cart = new Array();
    localStorage.setItem(cartKey, cart);
    cart.push(product);
  }

  cart.push(product);
}

function removeFromCart(product) {}

function getCartTotal(product) {}

function clearCart() {}

export { addToCart, removeFromCart, getCartTotal, clearCart };
