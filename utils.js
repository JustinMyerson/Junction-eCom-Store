async function doFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

function calculateVat(amount) {
  return amount * 0.15;
}

function renderNumberItemsInCart() {
  const itemsInCart = document.getElementById("items-in-cart-text");
  try {
    itemsInCart.innerText = JSON.parse(localStorage.getItem("Products")).length;
  } catch {
    console.log("Error caught, proceed as usual though!");
  }
}

export { doFetch, calculateVat, renderNumberItemsInCart };
