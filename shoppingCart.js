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

function removeFromCart(product) {
  let productArray = JSON.parse(localStorage.getItem("Products"));
  for (let i = 0; i < productArray.length; i++) {
    if (product.id === productArray[i].id) {
      productArray.splice(i, 1);
      console.log(productArray.length);
      break;
    }
  }
  localStorage.setItem("Products", JSON.stringify(productArray));
}

function getCartTotal(product) {}

function clearCart() {
  localStorage.clear();
}

export { addToCart, removeFromCart, getCartTotal, clearCart };
