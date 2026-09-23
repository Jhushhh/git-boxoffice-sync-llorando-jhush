function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, premium) {
  if (premium) {
      return Math.floor(quantity * basePrice * 1.5);
  }
  return Math.floor(quantity * basePrice);
}

module.exports = { isValidQuantity, calculateTicketPrice };
