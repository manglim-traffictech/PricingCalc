import React, { useState, useEffect } from 'react';
import BillingDisplay from './BillingDisplay';
import { getBillingRange } from '../utils/billing';
import theme from '../theme';

export default function InputSection() {
  const [payValue, setPayValue] = useState('');
  const [billValue, setBillValue] = useState('');
  const [billingData, setBillingData] = useState({
    payAmount: 0,
    billAmount: 0,
    highBilling: 0,
    lowBilling: 0,
    highPercentage: 0,
    lowPercentage: 0,
  });

  useEffect(() => {
    console.log('InputSection mounted');
  }, []);

  const handleSubmit = () => {
    console.log('Submitting with payValue:', payValue, 'billValue:', billValue);
    const payNum = parseFloat(payValue);
    if (isNaN(payNum)) {
      return;
    }
    const billNum = parseFloat(billValue);
    const result = getBillingRange(payNum);
    console.log(
      `Markup% High: ${(result.highPercentage * 100).toFixed(2)}%, Low: ${(result.lowPercentage * 100).toFixed(2)}%`
    );
    setBillingData({
      ...result,
      billAmount: isNaN(billNum) ? 0 : billNum,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={styles.container}>
      <label style={styles.label} htmlFor="pay-input">Pay Amount</label>
      <input
        id="pay-input"
        style={styles.input}
        placeholder="Enter pay amount"
        value={payValue}
        onChange={(e) => setPayValue(e.target.value)}
        onKeyDown={handleKeyDown}
        inputMode="numeric"
        data-testid="pay-input"
      />
      <label style={styles.label} htmlFor="bill-input">Bill Amount</label>
      <input
        id="bill-input"
        style={styles.input}
        placeholder="Enter bill amount"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
        onKeyDown={handleKeyDown}
        inputMode="numeric"
        data-testid="bill-input"
      />
      <BillingDisplay data={billingData} />
    </div>
  );
}

const styles = {
  container: {
    padding: 10,
    backgroundColor: theme.background,
    flex: 1,
  },
  input: {
    border: `1px solid ${theme.accent}`,
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    color: theme.text,
    fontFamily: theme.font,
    backgroundColor: 'transparent',
  },
  label: {
    color: theme.text,
    marginBottom: 4,
    fontFamily: theme.font,
    display: 'block',
  },
};
