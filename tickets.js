function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  if(quantity >= 5){
    return Math.round(quantity * basePrice * 0.9);
  }
  return Math.round(quantity * basePrice);
}

module.exports = { isValidQuantity, calculateTicketPrice };
