import React from 'react';

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>PLG calculator</h1>
      <p style={styles.subtitle}>Welcome to the PLG calculator.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
};
