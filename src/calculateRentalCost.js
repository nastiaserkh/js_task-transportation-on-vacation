/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const normalPrice = 40;
  const shortTermDiscount = 20;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const longTerm = 7;
  const basePrice = days * normalPrice;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basePrice - shortTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
