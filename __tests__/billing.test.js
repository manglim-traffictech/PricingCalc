import { getBillingRange } from '../app/utils/billing';

test('calculates billing ranges for pay amount', () => {
  const result = getBillingRange(100);
  expect(result.payAmount).toBe(100);
  expect(result.highPercentage).toBe(25);
  expect(result.lowPercentage).toBe(20);
  expect(result.highBilling).toBeCloseTo(133.33, 2);
  expect(result.lowBilling).toBeCloseTo(125, 2);
});
