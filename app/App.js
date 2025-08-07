import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InputSection from './components/InputSection';
import theme from './theme';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pricing Calculator</Text>
      <View style={styles.row}>
        <InputSection />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.background,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: theme.text,
    fontFamily: theme.font,
  },
});
