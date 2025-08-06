import React from 'react';
import { render } from '@testing-library/react-native';
import AdvancedSettings from '../app/components/AdvancedSettings';
import { MarkupProvider } from '../app/context/MarkupContext';

test('advanced settings scroll supports wheel', () => {
  const { getByTestId } = render(
    <MarkupProvider>
      <AdvancedSettings />
    </MarkupProvider>
  );
  const scroll = getByTestId('advanced-scroll');
  expect(typeof scroll.props.onWheel).toBe('function');
});
