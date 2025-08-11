import React from 'react';
import theme from '../theme';

export default function BillingDisplay({ data }) {
  const billAmount = data?.billAmount ?? data?.highBilling ?? 0;
  const payAmount = data?.payAmount ?? 0;
  const highBilling = data?.highBilling ?? 0;
  const lowBilling = data?.lowBilling ?? 0;
  const highPercentage = data?.highPercentage ?? 0;
  const lowPercentage = data?.lowPercentage ?? 0;
  const profitAmount = billAmount - payAmount;
  const profitMargin = billAmount === 0 ? 0 : (profitAmount / billAmount) * 100;

  const format = (n) => n.toFixed(2);

  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <span style={styles.label}>Profit Amount</span>
        <div style={styles.box}>
          <span style={styles.boxText}>{format(profitAmount)}</span>
        </div>
      </div>
      <div style={styles.item}>
        <span style={styles.label}>Profit Margin</span>
        <div style={styles.box}>
          <span style={styles.boxText}>{format(profitMargin)}%</span>
        </div>
      </div>
      <div style={styles.item}>
        <span style={styles.label}>High Billing Range</span>
        <div style={styles.box}>
          <span style={styles.boxText}>{format(highBilling)}</span>
        </div>
      </div>
      <div style={styles.item}>
        <span style={styles.label}>Low Billing Range</span>
        <div style={styles.box}>
          <span style={styles.boxText}>{format(lowBilling)}</span>
        </div>
      </div>
      <div style={styles.item}>
        <span style={styles.label}>Markup% Used</span>
        <div style={styles.box}>
          <span style={styles.boxText}>
            {`High: ${format(highPercentage * 100)}%, Low: ${format(lowPercentage * 100)}%`}
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: 10,
  },
  item: {
    marginBottom: 10,
  },
  label: {
    color: theme.text,
    marginBottom: 4,
    fontFamily: theme.font,
    display: 'block',
  },
  box: {
    border: `1px solid ${theme.accent}`,
    borderRadius: 4,
    padding: 8,
  },
  boxText: {
    color: theme.text,
    fontFamily: theme.font,
  },
};
