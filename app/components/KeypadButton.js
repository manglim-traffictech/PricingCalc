import React, { useState } from 'react';
import theme from '../theme.js';

export default function KeypadButton({ label, onPress }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      style={{
        ...styles.button,
        ...(pressed ? styles.pressed : {}),
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => {
        setPressed(false);
        onPress(label);
      }}
      onMouseLeave={() => setPressed(false)}
    >
      <span style={styles.text}>{label}</span>
    </button>
  );
}

const styles = {
  button: {
    flex: 1,
    border: `1px solid ${theme.accent}`,
    borderRadius: 4,
    padding: '10px 0',
    alignItems: 'center',
    margin: '0 3px',
    backgroundColor: theme.buttonBg,
    cursor: 'pointer',
  },
  pressed: {
    backgroundColor: theme.buttonPressed,
  },
  text: {
    fontSize: 16,
    color: theme.text,
    fontFamily: theme.font,
  },
};
