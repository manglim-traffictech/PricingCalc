import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import App from '../app/App';

test('renders pricing calculator title', () => {
  render(<App />);
  const title = screen.getByText('Pricing Calculator');
  expect(title).toBeTruthy();
});

test('renders keypad enter button', () => {
  render(<App />);
  const enter = screen.getByText('Enter');
  expect(enter).toBeTruthy();
});

test('updates input when keypad button pressed', () => {
  render(<App />);
  const button = screen.getByText('1');
  fireEvent.press(button);
  const input = screen.getByTestId('input-field');
  expect(input.props.value).toBe('1');
});
