import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InputKeypad from './components/InputKeypad';
import RangeTable from './components/RangeTable';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pricing Calculator</Text>
      <View style={styles.row}>
        <InputKeypad />
        <RangeTable title="Low Buy Range" />
        <RangeTable title="High Buy Range" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
