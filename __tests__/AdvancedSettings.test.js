import React from 'react';
import { render } from '@testing-library/react-native';
import AdvancedSettings from '../app/components/AdvancedSettings';
import { MarkupProvider } from '../app/context/MarkupContext';

test('advanced settings scroll supports wheel', () => {
  const { getByTestId, getAllByDisplayValue } = render(
    <MarkupProvider>
      <AdvancedSettings />
    </MarkupProvider>
  );
  const scroll = getByTestId('advanced-scroll');
  expect(typeof scroll.props.onWheel).toBe('function');
  const inputs = getAllByDisplayValue('0');
  expect(inputs.some(input => typeof input.props.onWheel === 'function')).toBe(true);
});
