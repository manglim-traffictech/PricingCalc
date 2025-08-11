import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

test('renders PLG calculator title', () => {
  render(<App />);
  expect(screen.getByText('PLG calculator')).toBeInTheDocument();
});
