import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import theme from '../theme.js';

export default function PercentageTable({ title }) {
  const values = [1, 5];
  for (let i = 10; i <= 100; i += 5) {
    values.push(i);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView style={styles.list} contentContainerStyle={styles.content}>
        {values.map((v) => (
          <View key={v} style={styles.cell}>
            <Text>{v}%</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: theme.text,
    fontFamily: theme.font,
  },
  list: {
    borderWidth: 1,
    borderColor: theme.accent,
    borderRadius: 4,
  },
  content: {
    padding: 5,
  },
  cell: {
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: '#444',
    alignItems: 'center',
  },
});
