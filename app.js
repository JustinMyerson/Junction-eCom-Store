/**
 * Function that accesses an old price HTML element, and converts into an integer to be used when calculating
 * the percentage discount that has been applied
 * @param {Integer} originalPrice - The original price of the product
 * @param {Integer} discountPrice - The discounted price of the product
 * @return {Integer} Rounded percentage discount that has been applied
 *
 * @example
 *
 * calculateDiscountPercentage(100, 90)
 */

function calculateDiscountPercentage(originalPrice, discountPrice) {
  let discount = (100 * (originalPrice - discountPrice)) / originalPrice;
  return Math.round(discount);
}

// Header
// Product

let loadMoreButton = document.getElementById("load-more-button");
let addToCartButtons = document.getElementsByClassName("product-cart-button");
let numberOfItemsInCart = document.getElementById("items-in-cart");
let oldPrice = document.getElementsByClassName("old-price");
let currentPrice = document.getElementsByClassName("current-price");
let rowTwoDiv = document.getElementById("row-two");
let rowThreeDiv = document.getElementById("row-three");

// HTML Elements to be rendered
let productNames = document.getElementsByClassName("product-name");
let productDesigners = document.getElementsByClassName("product-designer");
let productDetails = document.getElementsByClassName("product-description");
let productOldPrices = document.getElementsByClassName("old-price");
let productDiscountedPrices = document.getElementsByClassName("current-price");
let productImages = document.getElementsByClassName("product-image-asset");

async function getAllProducts(productStart, productEnd) {
  const response = await fetch(
    "https://yoco-students-api-server.herokuapp.com/v1/junction/"
  );
  const data = await response.json();
  console.log(`${data.length} length`);

  for (let i = productStart; i < productEnd; i++) {
    productImages[i].src = data[i].image;
    productNames[i].innerHTML = data[i].name;
    productDesigners[i].innerHTML = data[i].company;
    productDetails[i].innerHTML = data[i].description;
    productOldPrices[i].innerHTML = data[i].price;
    productDiscountedPrices[i].innerHTML = data[i].discounted_price;
  }
}

getAllProducts(0, 3);

async function getSingleProduct() {
  const response = await fetch(
    "https://yoco-students-api-server.herokuapp.com/v1/junction/product/1"
  );
  const data = await response.json();
}

let loadMoreClicked = 0;

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", () => {
    loadMoreClicked += 1;
    rowTwoDiv.innerHTML =
      `<ul class="product-list">` +
      `${`<li class="product-list-item">
    <div class="product-div">
      <div class="product-card">
        <a href="single-product.html">
          <img src="assets/macbook.png" alt="product-image" class="product-image-asset" />
        </a>
        <div class="product-image">
          <p class="product-image-text" id="discount">25% off</p>
        </div>
      </div>
      <div class="product-details">
        <h2 class="product-name">mac book pro</h2>
        <h3 class="product-designer">by <strong>apple</strong></h3>
        <div class="product-description">
          Mac Book Pro is made by Apple Computers and contains a
          powerful i7 processor.
        </div>
        <div class="prices-and-icons">
          <div class="prices">
            <div class="old-price">R 19, 529.00</div>
            <div class="current-price">R 17, 390.00</div>
          </div>
          <div class="product-cart-button">
            <button id="add-to-cart">
              <img src="/assets/add-to-cart.png" alt="cart-button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>`}`.repeat(3) +
      `</ul>`;
    getAllProducts(3, 6);
    if (loadMoreClicked == 2) {
      rowThreeDiv.innerHTML =
        `<ul class="product-list">` +
        `${`<li class="product-list-item">
  <div class="product-div">
    <div class="product-card">
      <a href="single-product.html">
        <img src="assets/macbook.png" alt="product-image" class="product-image-asset" />
      </a>
      <div class="product-image">
        <p class="product-image-text" id="discount">25% off</p>
      </div>
    </div>
    <div class="product-details">
      <h2 class="product-name">mac book pro</h2>
      <h3 class="product-designer">by <strong>apple</strong></h3>
      <div class="product-description">
        Mac Book Pro is made by Apple Computers and contains a
        powerful i7 processor.
      </div>
      <div class="prices-and-icons">
        <div class="prices">
          <div class="old-price">R 19, 529.00</div>
          <div class="current-price">R 17, 390.00</div>
        </div>
        <div class="product-cart-button">
          <button id="add-to-cart">
            <img src="/assets/add-to-cart.png" alt="cart-button" />
          </button>
        </div>
      </div>
    </div>
  </div>
</li>`}`.repeat(3) +
        `</ul>`;
      getAllProducts(6, 9);
    }
  });
}

let itemsInCart = 0;
Array.from(document.getElementsByClassName("product-cart-button")).forEach(
  function (addToCartButtons) {
    addToCartButtons.addEventListener("click", () => {
      itemsInCart += 1;
      numberOfItemsInCart.innerHTML = itemsInCart.toString();
      console.log("Item added to cart");
    });
  }
);

/**
 * Function that accesses an old price HTML element, and converts into an integer to be used when calculating
 * the percentage discount that has been applied
 * @return {Integer []} Array of old product prices that have not been discounted yet
 */

function getOldPrices() {
  let priceArray = new Array();
  Array.from(document.getElementsByClassName("old-price")).forEach(function (
    oldPrice
  ) {
    let unformattedPrice = oldPrice.innerHTML;
    let formattedPrice = 0;
    formattedPrice = parseInt(
      unformattedPrice.trim().substring(1).replace(/,/g, "").replace(/ /g, "")
    );
    priceArray.push(formattedPrice);
    console.log(formattedPrice);
  });
  return priceArray;
}

/**
 * Function that accesses the current price HTML element, and converts into an integer to be used when calculating
 * the percentage discount that has been applied
 * @return {Integer []} Array of old product prices that have been discounted
 */

function getCurrentPrices() {
  let priceArray = new Array();
  Array.from(document.getElementsByClassName("current-price")).forEach(
    function (currentPrice) {
      let unformattedPrice = currentPrice.innerHTML;
      let formattedPrice = 0;
      formattedPrice = parseInt(
        unformattedPrice.trim().substring(1).replace(/,/g, "").replace(/ /g, "")
      );
      priceArray.push(formattedPrice);
      console.log(formattedPrice);
    }
  );
  return priceArray;
}

const oldPriceArray = getOldPrices();
const currentPriceArray = getCurrentPrices();

/**
 * Function that accesses an old price HTML element, and converts into an integer to be used when calculating
 * the percentage discount that has been applied
 * @param {Integer} oldPriceArray - The original prices of the products
 * @param {Integer} currentPriceArray - The discounted prices of the products
 *
 * @example
 *
 * calculateDiscounts(oldPrices, currentPrices)
 */

function calculateDiscounts(oldPriceArray, currentPriceArray) {
  for (let i = 0; i < 3; i++) {
    console.log(
      `${calculateDiscountPercentage(oldPriceArray[i], currentPriceArray[i])}%`
    );
  }
}

calculateDiscounts(oldPriceArray, currentPriceArray);

// Footer
