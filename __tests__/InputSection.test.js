import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputSection from '../app/components/InputSection';

test('logs values on submit', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  render(<InputSection />);
  const payInput = screen.getByTestId('pay-input');
  const billInput = screen.getByTestId('bill-input');
  fireEvent.change(payInput, { target: { value: '100' } });
  fireEvent.change(billInput, { target: { value: '200' } });
  fireEvent.keyDown(billInput, { key: 'Enter', code: 'Enter' });
  expect(logSpy).toHaveBeenCalledWith('Submitting with payValue:', '100', 'billValue:', '200');
  logSpy.mockRestore();
});
