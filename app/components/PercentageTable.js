import React from 'react';
import theme from '../theme.js';

export default function PercentageTable({ title }) {
  const values = [1, 5];
  for (let i = 10; i <= 100; i += 5) {
    values.push(i);
  }

  return (
    <div style={styles.container}>
      <span style={styles.title}>{title}</span>
      <div style={styles.list}>
        <div style={styles.content}>
          {values.map((v) => (
            <div key={v} style={styles.cell}>
              <span>{v}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    margin: '0 5px',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: theme.text,
    fontFamily: theme.font,
    display: 'block',
  },
  list: {
    border: `1px solid ${theme.accent}`,
    borderRadius: 4,
    overflowY: 'auto',
    maxHeight: 200,
  },
  content: {
    padding: 5,
  },
  cell: {
    padding: '4px 0',
    borderBottom: '1px solid #444',
    textAlign: 'center',
  },
};
