export function getBillingRange(payAmount) {
  const amount = Number(payAmount);
  if (isNaN(amount)) {
    return null;
  }
  const highPercentage = 25;
  const lowPercentage = 20;
  const highBilling = parseFloat((amount / (1 - highPercentage / 100)).toFixed(2));
  const lowBilling = parseFloat((amount / (1 - lowPercentage / 100)).toFixed(2));
  return {
    payAmount: amount,
    highPercentage,
    highBilling,
    lowPercentage,
    lowBilling,
  };
}
