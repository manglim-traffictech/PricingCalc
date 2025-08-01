import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InputKeypad() {
  const [value, setValue] = useState('');

  const handlePress = (key) => {
    if (key === 'Enter') {
      // Placeholder handler for Enter
      console.log('Enter pressed:', value);
      return;
    }
    setValue((prev) => prev + key);
  };

  const renderButton = (label) => (
    <TouchableOpacity
      key={label}
      style={styles.button}
      onPress={() => handlePress(label)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

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
        placeholder="Placeholder Input"
        value={value}
        onChangeText={setValue}
        testID="input-field"
      />
      <View style={styles.keypad}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(renderButton)}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  keypad: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 3,
    backgroundColor: '#f2f2f2',
  },
  buttonText: {
    fontSize: 16,
  },
});
