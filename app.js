// Header
// Product

let loadMoreButton = document.getElementById("load-more-button");
let addToCartButton = document.getElementById("add-to-cart");
let numberOfItemsInCart = document.getElementById("items-in-cart")

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", () => {
    console.log("Show more button clicked");
  });
}

if (addToCartButton) {
  let items = 0;
  addToCartButton.addEventListener("click", () => {
    items += 1;
    numberOfItemsInCart.innerHTML = items.toString()
    console.log("Item added to cart");
  });
}

// Footer
