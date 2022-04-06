// Function
function calculateDiscountPercentage (originalPrice, discountPrice) {
  let discount = 100 * (originalPrice - discountPrice) / originalPrice
  return Math.round(discount)
}

function convertPriceToInteger() {
  let price = document.getElementById("")
}

// Header
// Product

let loadMoreButton = document.getElementById("load-more-button");
let addToCartButtons = document.getElementsByClassName("product-cart-button");
let numberOfItemsInCart = document.getElementById("items-in-cart")

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", () => {
    console.log("Show more button clicked");
  });
}

let items = 0;
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", () => {
    items += 1;
    numberOfItemsInCart.innerHTML = items.toString();
    console.log("Item added to cart");
  })
}


console.log(calculateDiscountPercentage(19529, 17390))

// Footer
