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
let productDiscounts = document.getElementsByClassName("product-image-text");
let productDiscountBox = document.getElementsByClassName("product-image");

async function getAllProducts(productStart, productEnd) {
  const response = await fetch(
    "https://yoco-students-api-server.herokuapp.com/v1/junction/"
  );
  const data = await response.json();

  for (let i = productStart; i < productEnd; i++) {
    productImages[i].src = data[i].image;
    productNames[i].innerHTML = data[i].name;
    productDesigners[i].innerHTML = data[i].company;
    productDetails[i].innerHTML = data[i].description;

    // Only render both prices and discounts if the old and current prices are different
    if (data[i].price === data[i].discounted_price) {
      productOldPrices[i].innerHTML = "blank"; // Want to render something here but make invisible
      productOldPrices[i].style.color = "#f1e0e0";
      productDiscountedPrices[i].innerHTML = data[i].discounted_price;
      productDiscountBox[i].style.opacity = "0%";
    } else {
      productOldPrices[i].innerHTML = data[i].price;
      productDiscountedPrices[i].innerHTML = data[i].discounted_price;
      productDiscounts[i].innerHTML = calculateDiscountPercentage(
        parseInt(data[i].price),
        parseInt(data[i].discounted_price)
      );
    }
  }
}

// Get the first row of products to be displayed
// getAllProducts(0, 3);

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
          <img src="" alt="product-image" class="product-image-asset" />
        </a>
        <div class="product-image">
          <p class="product-image-text" id="discount"></p>
        </div>
      </div>
      <div class="product-details">
        <h2 class="product-name"></h2>
        <h3 class="product-designer">by <strong>apple</strong></h3>
        <div class="product-description">
        </div>
        <div class="prices-and-icons">
          <div class="prices">
            <div class="old-price"></div>
            <div class="current-price"></div>
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
        <img src="" alt="product-image" class="product-image-asset" />
      </a>
      <div class="product-image">
        <p class="product-image-text" id="discount"></p>
      </div>
    </div>
    <div class="product-details">
      <h2 class="product-name"></h2>
      <h3 class="product-designer">by <strong>apple</strong></h3>
      <div class="product-description">
      </div>
      <div class="prices-and-icons">
        <div class="prices">
          <div class="old-price"></div>
          <div class="current-price"></div>
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
