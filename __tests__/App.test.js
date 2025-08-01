import React from 'react';
import { render, screen } from '@testing-library/react-native';
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
