import React, { useState } from 'https://esm.sh/react@18';
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

  const handleSubmit = () => {
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
