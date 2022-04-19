const productArray = new Array();

function addToCart(product) {
  productArray.push(product);
  console.log(productArray.length);
  localStorage.setItem("Products", JSON.stringify(productArray));
  if (localStorage.length !== 0) {
    console.log("Not empty");
    localStorage.setItem("Products", JSON.stringify(productArray));
    console.log(JSON.parse(localStorage.getItem("Products")));
  }
}

function removeFromCart(product) {}

function getCartTotal(product) {}

function clearCart() {
  localStorage.clear();
}

export { addToCart, removeFromCart, getCartTotal, clearCart };
