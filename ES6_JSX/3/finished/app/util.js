export function formatPrice(price, currency = "$") {
  return currency + " " + price;
}

export function calculateTax(price) {
  return price * 0.125
}