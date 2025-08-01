import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
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
  });

  const handleSubmit = () => {
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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pay Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter pay amount"
        placeholderTextColor={theme.accent}
        value={payValue}
        onChangeText={setPayValue}
        onSubmitEditing={handleSubmit}
        keyboardType="numeric"
        testID="pay-input"
      />
      <Text style={styles.label}>Bill Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter bill amount"
        placeholderTextColor={theme.accent}
        value={billValue}
        onChangeText={setBillValue}
        onSubmitEditing={handleSubmit}
        keyboardType="numeric"
        testID="bill-input"
      />
      <BillingDisplay data={billingData} />
    </View>
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
