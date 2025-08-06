import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import InputSection from './components/InputSection';
import AdvancedSettings from './components/AdvancedSettings';
import theme from './theme';
import { MarkupProvider } from './context/MarkupContext';

export default function App() {
  const [tab, setTab] = useState('calc');
  return (
    <MarkupProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Pricing Calculator</Text>
        <View style={styles.tabRow}>
          <Button title="Calculator" onPress={() => setTab('calc')} />
          <Button title="Advanced" onPress={() => setTab('advanced')} />
        </View>
        <View style={styles.row}>
          {tab === 'calc' ? <InputSection /> : <AdvancedSettings />}
        </View>
      </SafeAreaView>
    </MarkupProvider>
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
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
