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
let oldPrice = document.getElementsByClassName("old-price");
let currentPrice = document.getElementsByClassName("current-price");

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", () => {
    console.log("Show more button clicked");
  });
}

let itemsInCart = 0;
Array.from(document.getElementsByClassName("product-cart-button")).forEach(function(addToCartButtons) {
  addToCartButtons.addEventListener("click", () => {
    itemsInCart += 1;
    numberOfItemsInCart.innerHTML = itemsInCart.toString();
    console.log("Item added to cart");
  })
})

Array.from(document.getElementsByClassName("old-price")).forEach(function(oldPrice) {
  let unformattedPrice = oldPrice.innerHTML
  let formattedPrice = 0;
  formattedPrice = parseInt(unformattedPrice.trim().substring(1).replace(/,/g, '').replace(/ /g,''))
  console.log(formattedPrice)
})


console.log(calculateDiscountPercentage(19529, 17390))

// Footer
