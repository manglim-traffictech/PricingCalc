import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import KeypadButton from './KeypadButton';
import BillingDisplay from './BillingDisplay';
import { getBillingRange } from '../utils/billing';
import theme from '../theme';

export default function InputSection() {
  const [value, setValue] = useState('');
  const [billingData, setBillingData] = useState(null);

  const handlePress = (key) => {
    if (key === 'Enter') {
      const num = parseFloat(value);
      const result = getBillingRange(num);
      setBillingData(result);
      setValue('');
      return;
    }
    setValue((prev) => prev + key);
  };

  const rows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', 'Enter'],
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter value"
        placeholderTextColor={theme.accent}
        value={value}
        onChangeText={setValue}
        testID="input-field"
      />
      <View style={styles.keypad}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((label) => (
              <KeypadButton key={label} label={label} onPress={handlePress} />
            ))}
          </View>
        ))}
      </View>
      {billingData && <BillingDisplay data={billingData} />}
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
  keypad: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});
