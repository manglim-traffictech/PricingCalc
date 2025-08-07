import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import App from '../app/App.js';

test('renders pricing calculator title', () => {
  render(<App />);
  const title = screen.getByText('Pricing Calculator');
  expect(title).toBeTruthy();
});

test('renders pay amount label', () => {
  render(<App />);
  const labels = screen.getAllByText('Pay Amount');
  expect(labels.length).toBeGreaterThan(0);
});

test('updates input when typed', () => {
  render(<App />);
  const input = screen.getByTestId('pay-input');
  fireEvent.changeText(input, '1');
  expect(input.props.value).toBe('1');
});

test('shows billing information on initial render', () => {
  render(<App />);
  const display = screen.getByText(/High Billing Range/i);
  expect(display).toBeTruthy();
});

test('displays markup percentages after entering pay amount', () => {
  render(<App />);
  const input = screen.getByTestId('pay-input');
  fireEvent.changeText(input, '100');
  fireEvent(input, 'submitEditing');
  const markup = screen.getByText('High: 122.50%, Low: 94.75%');
  expect(markup).toBeTruthy();
});
