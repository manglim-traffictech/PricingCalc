import React from 'react';
import { render } from '@testing-library/react-native';
import AdvancedSettings from '../app/components/AdvancedSettings';
import { MarkupProvider } from '../app/context/MarkupContext';

test('advanced settings renders without scroll container', () => {
  const { queryByTestId, getByText } = render(
    <MarkupProvider>
      <AdvancedSettings />
    </MarkupProvider>
  );
  // ensure the old scroll container is gone
  expect(queryByTestId('advanced-scroll')).toBeNull();
  // verify buttons are rendered within the view
  getByText('Save');
  getByText('Reset');
});
