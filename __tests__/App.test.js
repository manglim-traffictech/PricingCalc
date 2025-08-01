import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import App from '../app/App';

test('renders pricing calculator title', () => {
  render(<App />);
  const title = screen.getByText('Pricing Calculator');
  expect(title).toBeTruthy();
});

test('renders pay amount label', () => {
  render(<App />);
  const label = screen.getByText('Pay Amount');
  expect(label).toBeTruthy();
});

test('updates input when typed', () => {
  render(<App />);
  const input = screen.getByTestId('pay-input');
  fireEvent.changeText(input, '1');
  expect(input.props.value).toBe('1');
});

test('shows billing information after submitting', () => {
  render(<App />);
  const input = screen.getByTestId('pay-input');
  fireEvent.changeText(input, '1');
  fireEvent(input, 'submitEditing');
  const display = screen.getByText(/High Billing Range/i);
  expect(display).toBeTruthy();
});
