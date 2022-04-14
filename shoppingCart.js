function addToCart(product) {
  if (localStorage.length === 0) {
    const productArray = new Array();
    localStorage.setItem(`${product.id}`, JSON.stringify(product));
    const item = JSON.parse(localStorage.getItem(`${product.id}`));
    productArray.push(item);
  }
  localStorage.setItem(`${product.id}`, JSON.stringify(product));
  const item = JSON.parse(localStorage.getItem(`${product.id}`));

  // if (localStorage.getItem(cart) === null) {
  //   const cart = new Array();
  //   window.localStorage.setItem(product.id, product);
  //   cart.push(product);
  // }

  //cart.push(product);
}

function removeFromCart(product) {}

function getCartTotal(product) {}

function clearCart() {
  localStorage.clear();
}

export { addToCart, removeFromCart, getCartTotal, clearCart };
