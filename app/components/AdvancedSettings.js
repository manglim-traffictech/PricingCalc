import React, { useContext } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Button } from 'react-native';
import MarkupContext from '../context/MarkupContext';
import theme from '../theme';

export default function AdvancedSettings() {
  const { highRange, lowRange, setHighRange, setLowRange, resetTables, saveTables } = useContext(MarkupContext);

  const updateRow = (setTable, index, field, value) => {
    const num = parseFloat(value);
    setTable(prev => {
      const updated = prev.map(row => [...row]);
      const row = updated[index];
      row[field] = isNaN(num) ? 0 : num;
      return updated;
    });
  };

  const renderTable = (title, data, setData, style) => (
    <View style={[styles.tableContainer, style]}>
      <Text style={styles.header}>{title}</Text>
      {data.map(([price, pct], idx) => (
        <View key={idx} style={styles.row}>
          <TextInput
            style={styles.cell}
            keyboardType="numeric"
            value={String(price)}
            onChangeText={text => updateRow(setData, idx, 0, text)}
          />
          <TextInput
            style={styles.cell}
            keyboardType="numeric"
            value={String(pct)}
            onChangeText={text => updateRow(setData, idx, 1, text)}
          />
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.tablesWrapper}>
        {renderTable('High Range', highRange, setHighRange, { marginRight: 10 })}
        {renderTable('Low Range', lowRange, setLowRange)}
      </View>
      <View style={styles.buttonRow}>
        <Button title="Save" onPress={saveTables} />
        <Button title="Reset" onPress={resetTables} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
    flexGrow: 1,
  },
  tablesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableContainer: {
    flex: 1,
    marginBottom: 20,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: theme.text,
    fontFamily: theme.font,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.accent,
    borderRadius: 4,
    padding: 4,
    marginRight: 5,
    color: theme.text,
    fontFamily: theme.font,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
