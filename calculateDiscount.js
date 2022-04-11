/**
 * Function that accesses an old price HTML element, and converts into an integer when calculating
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
  let percent = 0;
  let original = parseInt(originalPrice);
  let discount = parseInt(discountPrice);
  if (original !== 0) {
    percent = (100 * (originalPrice - discountPrice)) / originalPrice;
  }
  percent = Math.round(percent);
  return `${percent}% off`;
}

export { calculateDiscountPercentage };
