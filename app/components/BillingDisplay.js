import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme.js';

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
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Profit Amount</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>{format(profitAmount)}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Profit Margin</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>{format(profitMargin)}%</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>High Billing Range</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>{format(highBilling)}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Low Billing Range</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>{format(lowBilling)}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Markup% Used</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>
            {`High: ${format(highPercentage * 100)}%, Low: ${format(lowPercentage * 100)}%`}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  box: {
    borderWidth: 1,
    borderColor: theme.accent,
    borderRadius: 4,
    padding: 8,
  },
  boxText: {
    color: theme.text,
    fontFamily: theme.font,
  },
});
