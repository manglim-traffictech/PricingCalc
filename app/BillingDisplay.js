import React from 'https://esm.sh/react@18';
import { View, Text, StyleSheet } from 'https://esm.sh/react-native-web@0.19';
import theme from '../theme.js';

export default function BillingDisplay({ data }) {
  const billAmount = data?.billAmount ?? data?.highBilling ?? 0;
  const payAmount = data?.payAmount ?? 0;
  const highBilling = data?.highBilling ?? 0;
  const lowBilling = data?.lowBilling ?? 0;
  const profitAmount = billAmount - payAmount;
  const profitMargin = billAmount === 0 ? 0 : (profitAmount / billAmount) * 100;
  const markupUsed = payAmount === 0 ? 0 : ((billAmount / payAmount) - 1) * 100;

  const format = (n) => n.toFixed(2);

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(
      View,
      { style: styles.item },
      React.createElement(Text, { style: styles.label }, 'Profit Amount'),
      React.createElement(
        View,
        { style: styles.box },
        React.createElement(Text, { style: styles.boxText }, format(profitAmount)),
      ),
    ),
    React.createElement(
      View,
      { style: styles.item },
      React.createElement(Text, { style: styles.label }, 'Profit Margin'),
      React.createElement(
        View,
        { style: styles.box },
        React.createElement(
          Text,
          { style: styles.boxText },
          `${format(profitMargin)}%`,
        ),
      ),
    ),
    React.createElement(
      View,
      { style: styles.item },
      React.createElement(Text, { style: styles.label }, 'High Billing Range'),
      React.createElement(
        View,
        { style: styles.box },
        React.createElement(Text, { style: styles.boxText }, format(highBilling)),
      ),
    ),
    React.createElement(
      View,
      { style: styles.item },
      React.createElement(Text, { style: styles.label }, 'Low Billing Range'),
      React.createElement(
        View,
        { style: styles.box },
        React.createElement(Text, { style: styles.boxText }, format(lowBilling)),
      ),
    ),
    React.createElement(
      View,
      { style: styles.item },
      React.createElement(Text, { style: styles.label }, 'Markup% Used'),
      React.createElement(
        View,
        { style: styles.box },
        React.createElement(
          Text,
          { style: styles.boxText },
          `${format(markupUsed)}%`,
        ),
      ),
    ),
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    marginBottom: 10,
  },
  label: {
    color: theme.text,
    marginBottom: 4,
    fontFamily: theme.font,
  },
  box: {
    borderWidth: 1,
    borderColor: theme.accent,
    borderRadius: 4,
    padding: 8,
  },
  boxText: {
    color: theme.text,
    fontFamily: theme.font,
  },
});
