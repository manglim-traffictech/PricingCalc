import React, { useState, useEffect } from 'https://esm.sh/react@18';
import { View, Text, TextInput, StyleSheet } from 'https://esm.sh/react-native-web@0.19';
import BillingDisplay from './BillingDisplay.js';
import { getBillingRange } from '../utils/billing.js';
import theme from '../theme.js';

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
    const payNum = parseFloat(payValue);
    if (isNaN(payNum)) {
      return;
    }
    const billNum = parseFloat(billValue);
    const result = getBillingRange(payNum);
    setBillingData({
      ...result,
      billAmount: isNaN(billNum) ? 0 : billNum,
    });
  }, [payValue, billValue]);

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Text, { style: styles.label }, 'Pay Amount'),
    React.createElement(TextInput, {
      style: styles.input,
      placeholder: 'Enter pay amount',
      placeholderTextColor: theme.accent,
      value: payValue,
      onChangeText: setPayValue,
      keyboardType: 'numeric',
      testID: 'pay-input',
    }),
    React.createElement(Text, { style: styles.label }, 'Bill Amount'),
    React.createElement(TextInput, {
      style: styles.input,
      placeholder: 'Enter bill amount',
      placeholderTextColor: theme.accent,
      value: billValue,
      onChangeText: setBillValue,
      keyboardType: 'numeric',
      testID: 'bill-input',
    }),
    React.createElement(BillingDisplay, { data: billingData }),
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: theme.background,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.accent,
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    color: theme.text,
    fontFamily: theme.font,
  },
  label: {
    color: theme.text,
    marginBottom: 4,
    fontFamily: theme.font,
  },
});
