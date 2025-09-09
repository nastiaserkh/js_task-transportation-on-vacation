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

  if (days >= longTerm) {
    return days * normalPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return days * normalPrice - shortTermDiscount;
  }

  return days * normalPrice;
}

module.exports = calculateRentalCost;
