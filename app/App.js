import React from 'react';
import InputSection from './components/InputSection';
import theme from './theme';

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pricing Calculator</h1>
      <div style={styles.row}>
        <InputSection />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    backgroundColor: theme.background,
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  row: {
    display: 'flex',
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
};
