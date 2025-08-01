import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

export default function BillingDisplay({ data }) {
  const billAmount = data?.billAmount ?? data?.highBilling ?? 0;
  const payAmount = data?.payAmount ?? 0;
  const highBilling = data?.highBilling ?? 0;
  const lowBilling = data?.lowBilling ?? 0;
  const profitAmount = billAmount - payAmount;
  const profitMargin = billAmount === 0 ? 0 : (profitAmount / billAmount) * 100;

  const format = (n) => n.toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.row}>Bill Amount: {format(billAmount)}</Text>
      <Text style={styles.row}>Pay Amount: {format(payAmount)}</Text>
      <Text style={styles.row}>Profit Amount: {format(profitAmount)}</Text>
      <Text style={styles.row}>Profit Margin: {format(profitMargin)}%</Text>
      <Text style={styles.row}>High Billing Range: {format(highBilling)}</Text>
      <Text style={styles.row}>Low Billing Range: {format(lowBilling)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  row: {
    color: theme.text,
    marginBottom: 4,
    fontFamily: theme.font,
  },
});
