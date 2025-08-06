import { defaultHighRange, defaultLowRange } from './markup';

export function getBillingRange(payAmount, highRange = defaultHighRange, lowRange = defaultLowRange) {
  const amount = Number(payAmount);
  if (isNaN(amount)) {
    return null;
  }

  const findPercent = (pay, table) => {
    let pct = 0;
    for (const [threshold, percent] of table) {
      if (pay >= threshold) {
        pct = percent;
      } else {
        break;
      }
    }
    return pct;
  };

  const highPercentage = findPercent(amount, highRange);
  const lowPercentage = findPercent(amount, lowRange);

  const highBilling = parseFloat((amount * (1 + highPercentage)).toFixed(2));
  const lowBilling = parseFloat((amount * (1 + lowPercentage)).toFixed(2));

  return {
    payAmount: amount,
    highPercentage,
    highBilling,
    lowPercentage,
    lowBilling,
  };
}
