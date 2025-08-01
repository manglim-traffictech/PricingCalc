import { getBillingRange } from '../app/utils/billing';

test('calculates billing ranges for pay amount', () => {
  const result = getBillingRange(100);
  expect(result.payAmount).toBe(100);
  expect(result.highPercentage).toBeCloseTo(1.225, 3);
  expect(result.lowPercentage).toBeCloseTo(0.9475, 4);
  expect(result.highBilling).toBeCloseTo(222.5, 2);
  expect(result.lowBilling).toBeCloseTo(194.75, 2);
});
