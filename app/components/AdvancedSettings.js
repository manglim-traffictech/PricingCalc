import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.tablesWrapper}>
        {renderTable('High Range', highRange, setHighRange, { marginRight: 10 })}
        {renderTable('Low Range', lowRange, setLowRange)}
      </View>
      <View style={styles.buttonRow}>
        <Button title="Save" onPress={saveTables} />
        <Button title="Reset" onPress={resetTables} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    justifyContent: 'space-between',
  },
  tablesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  tableContainer: {
    flex: 1,
    marginBottom: 10,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 3,
    color: theme.text,
    fontFamily: theme.font,
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.accent,
    borderRadius: 2,
    padding: 2,
    marginRight: 3,
    color: theme.text,
    fontFamily: theme.font,
    fontSize: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
