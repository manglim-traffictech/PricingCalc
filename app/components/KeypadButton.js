import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';

export default function KeypadButton({ label, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
      onPress={() => onPress(label)}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.accent,
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 3,
    backgroundColor: theme.buttonBg,
  },
  pressed: {
    backgroundColor: theme.buttonPressed,
  },
  text: {
    fontSize: 16,
    color: theme.text,
    fontFamily: theme.font,
  },
});
